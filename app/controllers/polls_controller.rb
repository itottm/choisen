class PollsController < ApplicationController
  # def index
  #   @poll = Poll.new
  # end
  #
  # def result
  # end
  def index
    @polls = Poll.order('id')
  end

  def show

  end

  def new

  end

  def edit

  end

  def create

  end

  def update

  end

  def destroy

  end
end
