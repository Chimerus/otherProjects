class MasterController < ApplicationController
  def index
    @where = "index"
    render :index
  end

  def projects
    @where = "projects"
    render :projects
  end

  def show
    @where = "projects"
    @project = Project.find(params[:id])
    render :show
  end

  def about
    @where = "about"
    render :about
  end  

  def contact
    @where = "contact"
    render :contact
  end
  
end
