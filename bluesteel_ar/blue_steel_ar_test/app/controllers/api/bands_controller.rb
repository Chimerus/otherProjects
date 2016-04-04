# usualy inherit from a custom apicontroller, but not today
class Api::BandsController < ApplicationController
  api :GET, "/bands"
  description "If successful, it returns all bands with status 200"
  def index
    @bands = Band.all
  end
end