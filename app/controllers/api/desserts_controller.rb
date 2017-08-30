class Api::DessertsController < ApplicationController

  def create

    @dessert = Dessert.new(dessert_params)


    if @dessert.save
      render :show
    else
      render json: @dessert.errors.full_messages, status: 422
    end
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
    params.require(:dessert).permit(:description, :image_url, :name, :dessert_type, :dessert_origin, :avatar_image)
  end

end
