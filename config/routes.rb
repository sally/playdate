Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/profile_page', to: "main#profile_page"

  get '/circle_dashboard', to: "main#circle_dashboard"
end
