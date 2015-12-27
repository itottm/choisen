class PollsController < ApplicationController

  def index
    @polls = Poll.order('id')
  end

  def show
    @poll = Poll.find(params[:id])
  end

  def new
    @poll = Poll.new
  end

  def edit
    @poll = Poll.find(params[:id])
  end

  def create
    @poll = Poll.new(params[:poll])
    if @poll.save
      redirect_to @poll, notice: "質問を登録しました。"
    else
      render "new"
    end
  end

  def update
    @poll = Poll.find(params[:id])
    @poll.assign_attributes(params[:poll])
    if @poll.save
      redirect_to @poll, notice: "質問を更新しました。"
    else
      render "edit"
    end
  end

  def destroy
    @poll = Poll.find(params[:id])
    @poll.destroy
    redirect_to :polls, notice: "質問を削除しました"
  end

  def search
    @polls = Poll.search(params[:q])
    render "index"
  end
end
