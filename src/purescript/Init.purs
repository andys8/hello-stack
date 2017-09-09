
module Init (init) where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Unsafe (unsafePerformEff)
import DOM.Node.Types (Element)
import React (createElement)
import ReactDOM (render)
import App (app)

init :: Unit
init = unsafePerformEff $ do
  let appEl = createElement app unit []
  void (getElementById "app__purescript" >>= render appEl)

foreign import getElementById :: forall eff. String -> Eff eff Element
