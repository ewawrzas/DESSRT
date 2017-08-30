class AddAttachmentAvatarImageToDesserts < ActiveRecord::Migration[5.1]
  def self.up
    change_table :desserts do |t|
      t.attachment :avatar_image
    end
  end

  def self.down
    remove_attachment :desserts, :avatar_image
  end
end
