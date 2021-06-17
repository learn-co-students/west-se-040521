class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }

    # def authenticate(text_password)
    #     if BCrypt::Password.new(self.password_digest) == text_password
    #         self
    #     else
    #         false
    #     end
    # end
end