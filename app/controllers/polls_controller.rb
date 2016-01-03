class PollsController < ApplicationController
  before_action :set_note,only:[:show,:edit,:update,:destroy]

  def index
    @polls = Poll.order('id')
  end

  def show
    @answers = Answer.where(poll_id: params[:id]).group(:answer_num).count()
  end

  def new
    @poll = Poll.new
  end

  def edit

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
    # TODO : ストロングパラメータ対応する
    @poll.assign_attributes(params[:poll])
    # @poll.increment!(:answer01,1000)
    if @poll.save
      redirect_to @poll, notice: "質問を更新しました。"
    else
      render "edit"
    end
  end

  def destroy
    @poll.destroy
    redirect_to :polls, notice: "質問を削除しました"
  end

  def search
    @polls = Poll.search(params[:q])
    render "index"
  end

  private
    def set_note
      @poll = Poll.find(params[:id])
    end
end
