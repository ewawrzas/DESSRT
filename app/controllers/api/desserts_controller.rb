class Api::DessertsController < ApplicationController

  def create
    @dessert = Dessert.create!(dessert_params)
    render :show
  end

  def show
    @dessert = Dessert.find(params[:id])
  end

  def index
    @desserts = Dessert.all
    render :index
  end

  private

  def dessert_params
    params.require(:dessert).permit(:description, :image_url, :name, :dessert_type, :dessert_origin)
  end

end
