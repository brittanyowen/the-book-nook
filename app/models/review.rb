class Review < ApplicationRecord
  validates :content, length: {maximum: 500}
  belongs_to :user
  belongs_to :book
end
