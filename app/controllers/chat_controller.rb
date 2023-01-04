class ChatController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :generate_response
  def index
  end

  def generate_response
    client = OpenAI::Client.new(
      api_key: "ADD_YOUR_TOKEN_HERE"
    )

    response = client.completions(
      engine: "text-davinci-002",
      prompt: params[:message],
      max_tokens: 2048,
      temperature: 0.5
    )

    @response_text = response.choices.first.text
    render plain: @response_text
  end
end
