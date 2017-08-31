class AddAttachmentWallImageToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :wall_image
    end
  end

  def self.down
    remove_attachment :users, :wall_image
  end
end
