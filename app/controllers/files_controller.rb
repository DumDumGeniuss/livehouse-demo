class FilesController < ApplicationController
	def create
		render json: { status:"success" }
	end
end
