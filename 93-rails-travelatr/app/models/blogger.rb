class Blogger < ApplicationRecord
  has_many :posts
  has_many :destinations, through: :posts

  validates :age, :numericality => { :greater_than => 0 }
  validates :name, uniqueness: true
  validates :bio, length: { minimum: 30 }

  def total_likes
    self.posts.collect {|post| post.likes }.sum
  end

  def featured_post
    sorted_posts = self.posts.sort {|post| post.likes}
    sorted_posts.first
  end
end
