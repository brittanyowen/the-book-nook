class Review < ApplicationRecord
  validates :content, length: {maximum: 250}
  belongs_to :user
  belongs_to :book
end
