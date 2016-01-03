class AnswersController < ApplicationController

  def create
    @poll = Poll.find(params[:poll_id])
    @answer = @poll.answers.create(answer_params)
    redirect_to poll_path(@poll.id)
  end

  private

  def answer_params
    params[:answer].permit(:answer_num)
  end

end
