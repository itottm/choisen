module ApplicationHelper
  def page_title
    title = 'Choisen'
    title = @page_title + ' - ' + title if @page_title
    title
  end

  def move_header
    move = false
    move = true if @move_header
    move
  end
end
