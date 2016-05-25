module ApplicationHelper
  def page_title
    title = 'ちょい選'
    title = @page_title + ' - ' + title if @page_title
    title
  end

  def animate_header
    animate_header = false
    animate_header = true if @animate_header
    animate_header
  end
end
