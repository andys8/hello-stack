module App exposing (..)

import Html exposing (text)

name: String
name = "Elm"

main : Html.Html a
main =
    text <| "Hello, I'm " ++ name ++ "."