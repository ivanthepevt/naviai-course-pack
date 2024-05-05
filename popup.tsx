import { DeepChat } from '~/contents/clone-deep-chat-react';
import cssText from "data-text:~/contents/plasmo-overlay.css"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://vinuni.instructure.com/courses/1980/*"],
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
  // Retrieve displayName and imageUrl from local storage
  const displayName = window.localStorage.getItem('displayName') || 'Tuan Hiep';
  const imageUrl = window.localStorage.getItem('imageUrl') || '';

  // Debug print statements
  console.log('Retrieved Display Name:', displayName);
  console.log('Retrieved Image URL:', imageUrl);

  return (
    <div className="App">
      <img src={imageUrl} alt="User Avatar" />
      <DeepChat
        demo={true}
        style={{ borderRadius: '10px' }}
        textInput={{ placeholder: { text: `Welcome, ${displayName}!` } }}
        initialMessages={initialMessages}
      />
    </div>
  )
}

export default PlasmoOverlay