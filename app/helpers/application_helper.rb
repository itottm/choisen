module ApplicationHelper
  def page_title
    title = "Choisen"
    title = @page_title + " - " + title if @page_title
    title
  end
end
