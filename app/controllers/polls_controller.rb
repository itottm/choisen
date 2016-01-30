class PollsController < ApplicationController
  before_action :set_note,only:[:show,:result,:edit,:update,:destroy]

  def index
    @polls = Poll.page(params[:page]).per(12).order('id desc')
    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    @answers = Answer.where(poll_id: params[:id]).group(:answer_num).count()
    redirect_to result_path, notice: '投票は締め切りました' if @poll.limit < Time.current
  end

  def result
    @answers = Answer.where(poll_id: params[:id]).order(answer_num: :asc).group(:answer_num).count()
    @time = Time.now()
  end

  def ajax_action
    @time = Time.now()
  end

  def new
    @poll = Poll.new
  end

  def edit

  end

  def confirm
    @poll = Poll.new(params[:poll])
    render :new if @poll.invalid?
  end

  def create
    @poll = Poll.new(params[:poll])

    if params[:back]
      render :new
    elsif @poll.save
      redirect_to @poll, notice: '質問を登録しました。'
    else
      render :new
    end
  end

  def update
    # TODO : ストロングパラメータ対応する
    @poll.assign_attributes(params[:poll])
    # @poll.increment!(:answer01,1000)
    if @poll.save
      redirect_to @poll, notice: '質問を更新しました。'
    else
      render :edit
    end
  end

  def destroy
    @poll.destroy
    redirect_to :polls, notice: '質問を削除しました'
  end

  def search
    @polls = Poll.search(params[:q])
    render :index
  end


  private
    def set_note
      @poll = Poll.find(params[:id])
    end
end
