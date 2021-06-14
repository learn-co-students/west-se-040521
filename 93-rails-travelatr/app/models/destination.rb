class Destination < ApplicationRecord
  has_many :posts
  has_many :bloggers, through: :posts

  def most_recent
    self.posts.limit(5)
  end

  def average_blogger_age
    unique_bloggers = self.bloggers.uniq
    blogger_ages = unique_bloggers.collect {|blogger| blogger.age }
    blogger_ages.sum / unique_bloggers.count
  end

  def featured_post
    self.posts.sort_by {|post| post.likes }.first
  end
end
