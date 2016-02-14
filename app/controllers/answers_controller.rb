class AnswersController < ApplicationController

  def create
    @poll = Poll.find(params[:poll_id])
    @answer = @poll.answers.create(answer_params)
    redirect_to result_path(@poll.id), notice:'投票しました！';
  end

  private

  def answer_params
    params[:answer].permit(:answer_num, :user_id)
  end

end
