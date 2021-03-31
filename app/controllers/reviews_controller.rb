class ReviewsController < ApplicationController
  before_action :set_review, only: [:update, :destroy]

  # GET /reviews
  def index
    @book = Book.find(params[:book_id])
    @reviews = Review.where(book_id: @book)
    render json: @reviews
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    # @review = Review.find(params[:id])
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    # @review = Review.find(params[:id])
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = @current_user.reviews.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:content, :user_id, :book_id)
    end
end