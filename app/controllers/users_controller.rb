class UsersController < ApplicationController
  def guest
    guest_user # guest_userを作成する
    redirect_to root_path
  end
end
