class ThingsToDosController < ApplicationController
  before_action :set_things_to_do, only: [:show, :edit, :update, :destroy]

  # GET /things_to_dos
  # GET /things_to_dos.json
  def index
    @things_to_dos = ThingsToDo.all
  end

  # GET /things_to_dos/1
  # GET /things_to_dos/1.json
  def show
  end

  # GET /things_to_dos/new
  def new
    @things_to_do = ThingsToDo.new
  end

  # GET /things_to_dos/1/edit
  def edit
  end

  # POST /things_to_dos
  # POST /things_to_dos.json
  def create
    @things_to_do = ThingsToDo.new(things_to_do_params)

    respond_to do |format|
      if @things_to_do.save
        format.html { redirect_to @things_to_do, notice: 'Things to do was successfully created.' }
        format.json { render :show, status: :created, location: @things_to_do }
      else
        format.html { render :new }
        format.json { render json: @things_to_do.errors, status: :unprocessable_entity }
      end
    end
    # @things_to_do.save
  end

  # PATCH/PUT /things_to_dos/1
  # PATCH/PUT /things_to_dos/1.json
  def update
    respond_to do |format|
      if @things_to_do.update(things_to_do_params)
        format.html { redirect_to @things_to_do, notice: 'Things to do was successfully updated.' }
        format.json { render :show, status: :ok, location: @things_to_do }
      else
        format.html { render :edit }
        format.json { render json: @things_to_do.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /things_to_dos/1
  # DELETE /things_to_dos/1.json
  def destroy
    @things_to_do.destroy
    respond_to do |format|
      format.html { redirect_to things_to_dos_url, notice: 'Things to do was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_things_to_do
      @things_to_do = ThingsToDo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def things_to_do_params
      params.require(:things_to_do).permit(:thing, :description, :done)
    end
end
