module App (app) where

import Prelude (Unit, (<$>), (<>), unit)

import React (ReactClass, ReactElement, Render, createClass, getProps, spec)
import React.DOM (div, text) as DOM

name :: String
name = "Purescript"

app :: ReactClass Unit
app = createClass (spec unit render)
  where
  render :: forall eff. Render Unit Unit eff
  render this = render' <$> getProps this
    where
    render' :: Unit -> ReactElement
    render' props =
      DOM.div [] [ DOM.text ("Hello, I'm " <> name <> ".") ]