class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}


  has_attached_file :image, default_url: "cat.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :wall_image, styles: { large: '1800x' }, default_url: "background5.jpg"
  validates_attachment_content_type :wall_image, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :checkins

  def num_checkins
    checkins.length
  end


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

end
