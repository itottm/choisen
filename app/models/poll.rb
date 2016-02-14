class Poll < ActiveRecord::Base
  belongs_to :user
  has_many :answers
  has_many :choices
  accepts_nested_attributes_for :choices

  class << self
    def search(query)
      rel = order("id")
      if query.present?
        rel = rel.where("title LIKE ? OR question LIKE ?","%#{query}%","%#{query}%")
      end
    end
  end

  before_save :limit_to_time

  private
  def limit_to_time
    if self.limit == '15分'
      self.limit = Time.current.since(15.minute)
    elsif self.limit == '30分'
      self.limit = Time.current.since(30.minute)
    elsif self.limit == '1時間'
      self.limit = Time.current.since(1.hours)
    elsif self.limit == '3時間'
      self.limit = Time.current.since(3.hours)
    elsif self.limit == '6時間'
      self.limit = Time.current.since(6.hours)
    elsif self.limit == '12時間'
      self.limit = Time.current.since(12.hours)
    elsif self.limit == '24時間'
      self.limit = Time.current.since(24.hours)
    end
    puts self.limit
  end
end