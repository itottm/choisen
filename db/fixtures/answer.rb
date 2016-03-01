2000.times do |i|
  Answer.seed do |s|
    s.id = i
    s.poll_id = rand(1..25)
    s.answer_num = rand(1..4)
    s.user_id = rand(1..25)
  end
end