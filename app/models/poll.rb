class Poll < ActiveRecord::Base
  has_many :answers

  class << self
    def search(query)
      rel = order("id")
      if query.present?
        rel = rel.where("title LIKE ? OR question LIKE ?","%#{query}%","%#{query}%")
      end
    end
  end
end