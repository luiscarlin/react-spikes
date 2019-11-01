import React from 'react'
import Modal from './Modal'
import './app.scss'

function App() {
  return (
    <main className="app">
      <p>
        Lorem ipsum dolor amet tumeric hell of keytar shoreditch drinking
        vinegar succulents live-edge, listicle enamel pin sartorial narwhal
        leggings beard. +1 portland actually, enamel pin chillwave live-edge
        lo-fi neutra banh mi adaptogen glossier church-key. Kickstarter polaroid
        flannel cray, knausgaard craft beer direct trade pour-over tousled
        whatever keytar beard food truck. Tote bag waistcoat celiac fashion axe
        cray YOLO roof party lyft. Artisan poutine kogi cornhole leggings, fanny
        pack jianbing woke before they sold out. Kogi stumptown leggings hashtag
        coloring book unicorn, flexitarian wolf. Narwhal knausgaard PBR&B
        butcher, twee seitan bespoke mlkshk..
      </p>
      <p>
        Thundercats etsy deep v fam organic. Pop-up VHS neutra narwhal listicle,
        offal four loko small batch chambray trust fund cloud bread 3 wolf moon
        vaporware tofu cray. Glossier gluten-free prism af before they sold out,
        art party ethical. Four dollar toast waistcoat woke fam franzen
        kombucha, shaman tacos. Kogi kitsch aesthetic letterpress fingerstache
        twee neutra fanny pack lyft photo booth leggings dreamcatcher copper mug
        plaid 8-bit.
      </p>
      <p>
        Four loko plaid poke swag selfies. Meggings poutine cronut lumbersexual
        YOLO vegan selfies tote bag tbh. Enamel pin air plant PBR&B pickled
        listicle farm-to-table. Etsy palo santo skateboard, jean shorts gentrify
        jianbing lumbersexual kinfolk YOLO.
      </p>
      <Modal triggerText="This is a button to trigger the Modal" />
    </main>
  )
}

export default App
