class Book < ApplicationRecord
  validates :title, presence: true
  validates :author, presence: true
  validates :image_url, presence: true
  validates :summary, presence: true, length: {maximum: 500}
  belongs_to :user
  has_many :reviews
end