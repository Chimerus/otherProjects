require 'rails_helper'

RSpec.describe Api::BandsController, type: :controller do
    render_views

    describe "GET #index" do
      it "responds successfully with a 200 status" do
        # add the format or it will yell at us for formating since api is json, otherwise expect html
        get :index, format: :json
        expect(response.status).to eq(200)
    end
    # apipie grabs this response and saves it somewhere as an example for us!
    it "shows all the bands", :show_in_doc do
      band1 = FactoryGirl.create(:band, label:nil)
      band2 = FactoryGirl.create(:band, label:nil)

      get :index, format: :json
      # assign works like params, run test rspec package it up like @bands
      expect(assigns(:bands)).to match_array([band1,band2])
    end
  end

end