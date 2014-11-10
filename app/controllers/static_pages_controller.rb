class StaticPagesController < ApplicationController
  def home
  end
  
  def sharks
  end
  
  def resume
  end
  
  def download
    send_file(
      "#{Rails.root}/public/AnthonyResume.pdf",
      filename: "AnthonyEPintoResume.pdf",
      type: "application/pdf"
    )
  end
end
