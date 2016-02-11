require 'httparty'

class MapsController < ApplicationController
  before_action :set_map, only: [:show, :edit, :update, :destroy]

  def index
    # put your google maps key in your own env.
    @key = ENV['MAPS_KEY']
    # set the origin, pull from location?
    @origin = 'Chicago'
    #set the destination, pull from database.
    @destination = "San Francisco"
    # set the transportation method, pull from db
    @ride = "car"
    # have to do this httparty hackaround 
    response = HTTParty.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+@origin+'&destinations='+@destination+'&mode='+@ride+'&language=en-EN&key='+@key)
    # turns it useful
    parsed_response = JSON.parse(response.body)  
    # parsed_response["rows"].first["elements"].first["duration"] gets text and value
    @time=parsed_response["rows"].first["elements"].first["duration"]["text"]
# debugger
  end
# not implemented yet, come back to this
  def eta
    @origin = params[:origin]
    @destination = params[:destination]
    @key = ENV['MAPS_KEY']
    response = HTTParty.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=New+York&destinations=San+Francisco&mode=bicycling&language=en-EN&key='+@key)
    parsed_response = JSON.parse(response.body)  
    render json: response
  end
# all below is other junk i got with the scaffold, unmodified.
  # GET /maps/1
  # GET /maps/1.json
  def show
  end

  # GET /maps/new
  def new
    @map = Map.new
  end

  # GET /maps/1/edit
  def edit
  end

  # POST /maps
  # POST /maps.json
  def create
    @map = Map.new(map_params)

    respond_to do |format|
      if @map.save
        format.html { redirect_to @map, notice: 'Map was successfully created.' }
        format.json { render :show, status: :created, location: @map }
      else
        format.html { render :new }
        format.json { render json: @map.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /maps/1
  # PATCH/PUT /maps/1.json
  def update
    respond_to do |format|
      if @map.update(map_params)
        format.html { redirect_to @map, notice: 'Map was successfully updated.' }
        format.json { render :show, status: :ok, location: @map }
      else
        format.html { render :edit }
        format.json { render json: @map.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /maps/1
  # DELETE /maps/1.json
  def destroy
    @map.destroy
    respond_to do |format|
      format.html { redirect_to maps_url, notice: 'Map was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_map
      @map = Map.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def map_params
      params.fetch(:map, {})
    end
end
