class User < ApplicationRecord
  validates :username, uniqueness: true, presence: true
  validates :email, presence: true
  validates :password_digest, presence: true
  has_many :books
end
