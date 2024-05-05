import { DeepChat } from '~/contents/clone-deep-chat-react';
import cssText from "data-text:~/contents/plasmo-overlay.css"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://vinuni.instructure.com/courses/1980/*"],
  css: ["font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const initialMessages = [
  { role: 'user', text: 'Hey, how are you today?' },
  { role: 'ai', text: 'I am doing very well!' },
];

const PlasmoOverlay = () => {
  // Retrieve values from local storage
  let currentUrl = window.localStorage.getItem('currentUrl') || 'No URL found';
  let savedImageUrl = window.localStorage.getItem('imageUrl') || 'No image URL found';
  let savedDisplayName = window.localStorage.getItem('displayName') || 'No display name found';

  return (
    <div
      className="hw-top"
      style={{
        padding: 12
      }}>
      <p>Current URL: {currentUrl}</p>
      <p>Saved Image URL: {savedImageUrl}</p>

      <DeepChat
        demo={true}
        style={{ borderRadius: '10px' }}
        textInput={{ placeholder: { text: "`Welcome, ${displayName}!`" } }}
      />

      <p>Saved Display Name: {savedDisplayName}</p>
    </div>
  )
}

export default PlasmoOverlay