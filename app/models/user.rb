class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: true, presence: true
  validates :email, uniqueness: true, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: {in: 6..20}
  has_many :books
end
