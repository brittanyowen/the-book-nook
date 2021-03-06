class BooksController < ApplicationController
  before_action :authorize_request, except: [:index]
  before_action :set_book, only: [:update, :destroy]

  # GET /books
  def index
    @books = Book.all
    render json: @books.limit(20).sort_by{|x| x[:created_at]}.reverse
  end

  # GET /books/1
  def show
    @book = Book.find(params[:id])
    render json: @book, include: :reviews
  end

  # POST /books
  def create
    @book = Book.new(book_params)
    @book.user = @current_user
    if @book.save
      render json: @book, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = @current_user.books.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:title, :author, :summary, :image_url)
    end
end
