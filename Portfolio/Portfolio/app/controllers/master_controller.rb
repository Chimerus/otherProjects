class MasterController < ApplicationController
  def index
    render :index
  end

  def projects
    render :projects
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end
  
end
