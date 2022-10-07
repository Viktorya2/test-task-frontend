import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState({})
  const [text, setText] = useState('')
  const [translate, setTranslate] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/get')
      .then(response => response.json())
      .then(data => setData(data.data));
  }, [])

  const saveChanges = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        translate
      })
    };
    fetch('http://localhost:3000/save', requestOptions)
      .then(response => response.json())
  }

  function textChange(e) {
    setText(e.currentTarget.textContent)
  }

  function translateChange(e) {
    setTranslate(e.currentTarget.textContent)
  }

  return (
    <div className="App">
      <div className="float__block">
        <div className="float__more controls1">
          <ul>
            <li>
              <a href="#">Insert all tags <span>F9</span></a>
            </li>
            <li>
              <a href="#">Remove tags</a>
            </li>
            <li>
              <a href="#">Removing formatting</a>
            </li>
            <li>
              <a href="#">Select all <span>Ctrl+A</span></a>
            </li>
            <li>
              <a href="#">Reset</a>
            </li>
          </ul>
        </div>
        <div className="float__more preview2">
          <ul>
            <li>
              <a href="#">Insert all tags <span>F9</span></a>
            </li>
            <li>
              <a href="#">Remove tags</a>
            </li>
            <li>
              <a href="#">Removing formatting</a>
            </li>
            <li>
              <a href="#">Select all <span>Ctrl+A</span></a>
            </li>
            <li>
              <a href="#">Reset</a>
            </li>
          </ul>
        </div>
        <div className="float__more preview3">
          <ul>
            <li>
              <a href="#">Insert all tags <span>F9</span></a>
            </li>
            <li>
              <a href="#">Remove tags</a>
            </li>
            <li>
              <a href="#">Removing formatting</a>
            </li>
            <li>
              <a href="#">Select all <span>Ctrl+A</span></a>
            </li>
            <li>
              <a href="#">Reset</a>
            </li>
          </ul>
        </div>
        <div className="float__more preview4">
          <ul>
            <li>
              <a href="#">Insert all tags <span>F9</span></a>
            </li>
            <li>
              <a href="#">Remove tags</a>
            </li>
            <li>
              <a href="#">Removing formatting</a>
            </li>
            <li>
              <a href="#">Select all <span>Ctrl+A</span></a>
            </li>
            <li>
              <a href="#">Reset</a>
            </li>
          </ul>
        </div>
        <div className="float__more preview5">
          <ul>
            <li>
              <a href="#">Insert all tags <span>F9</span></a>
            </li>
            <li>
              <a href="#">Remove tags</a>
            </li>
            <li>
              <a href="#">Removing formatting</a>
            </li>
            <li>
              <a href="#">Select all <span>Ctrl+A</span></a>
            </li>
            <li>
              <a href="#">Reset</a>
            </li>
          </ul>
        </div>
        <div className="float__more preview6">
          <ul>
            <li>
              <a href="#">Insert all tags <span>F9</span></a>
            </li>
            <li>
              <a href="#">Remove tags</a>
            </li>
            <li>
              <a href="#">Removing formatting</a>
            </li>
            <li>
              <a href="#">Select all <span>Ctrl+A</span></a>
            </li>
            <li>
              <a href="#">Reset</a>
            </li>
          </ul>
        </div>
        <div className="float__more preview7">
          <ul>
            <li>
              <a href="#">Insert all tags <span>F9</span></a>
            </li>
            <li>
              <a href="#">Remove tags</a>
            </li>
            <li>
              <a href="#">Removing formatting</a>
            </li>
            <li>
              <a href="#">Select all <span>Ctrl+A</span></a>
            </li>
            <li>
              <a href="#">Reset</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tooltip__app">
        <div className="tooltip__header">
          <div className="left__tooltip">
            <div className="back__tooltip">
              <a href="#"><span><img src="img/backicon.svg" alt="backicon"/></span> Job #111111</a>
            </div>
            <div className="tooltip__menu--small">
              <a href="#"/>
            </div>
            <div className="tooltip__menu">
              <ul>
                <li className="droppable__menu">
                  <a href="#">FILE <span><svg width={8} height={5} viewBox="0 0 8 5" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4.65382L0 0.34613L8 0.34613L4 4.65382Z" fill="#9E9E9E"/></svg></span></a>
                  <div className="droppable__box">
                    <ul>
                      <li className="droppable__inner">
                        <a href="#">Package <span className="droppable__arrow"><img src="img/rightdrop.svg"
                                                                                    alt="rightdrop"/></span></a>
                        <div className="droppable__sub">
                          <ul>
                            <li>
                              <a href="#">Download</a>
                            </li>
                            <li>
                              <a href="#">Upload</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="droppable__inner">
                        <a href="#">XLIFF <span className="droppable__arrow"><img src="img/rightdrop.svg"
                                                                                  alt="rightdrop"/></span></a>
                        <div className="droppable__sub" style={{display: 'none'}}>
                          <ul>
                            <li>
                              <a href="#">Export</a>
                            </li>
                            <li>
                              <a href="#">Import</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#"><span className="logout__button"><img src="img/logouticon.svg"
                                                                          alt="logout"/></span> Logout</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="droppable__menu">
                  <a href="#">EDIT <span><svg width={8} height={5} viewBox="0 0 8 5" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4.65382L0 0.34613L8 0.34613L4 4.65382Z" fill="#9E9E9E"/></svg></span></a>
                  <div className="droppable__box check__droppable">
                    <ul>
                      <li className="check__active">
                        <a href="#" data-check="search__field"><input className="styled-checkbox" id="dcheck1"
                                                                      type="checkbox" defaultValue="search__input"/>
                          <label htmlFor="dcheck1">Search</label></a>
                      </li>
                      <li>
                        <a href="#"><input className="styled-checkbox" id="dcheck2" type="checkbox"
                                           defaultValue="value1"/> <label htmlFor="dcheck2">Compact</label></a>
                      </li>
                      <li>
                        <a href="#"><input className="styled-checkbox" id="dcheck3" type="checkbox"
                                           defaultValue="value1"/> <label htmlFor="dcheck3">Live view</label></a>
                      </li>
                      <li>
                        <a href="#"><input className="styled-checkbox" id="dcheck4" type="checkbox"
                                           defaultValue="value1"/> <label htmlFor="dcheck4">Source text</label></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="droppable__menu">
                  <a href="#">VIEW <span><svg width={8} height={5} viewBox="0 0 8 5" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4.65382L0 0.34613L8 0.34613L4 4.65382Z" fill="#9E9E9E"/></svg></span></a>
                  <div className="droppable__box segments__box">
                    <div className="el__drop--box">
                      <p>SEGMENTS</p>
                      <div className="check__drop">
                        <a href="#"><span className="info__icon"><img src="img/segment1.svg"
                                                                      alt="segment"/></span> Compact <span
                          className="key__shortcut">Alt+Y</span></a> <a href="#"><span className="info__icon"><img
                        src="img/segment2.svg" alt="segment"/></span> Source <span
                        className="key__shortcut">Alt+V</span></a> <a href="#" className="droppable__view"><img
                        src="img/rightddrop.svg" alt="rightddrop"/> <span className="info__icon"><img
                        src="img/segment3.svg" alt="segment"/></span> Font size <span
                        className="key__shortcut">Alt+U</span></a> <a href="#"><span className="info__icon"><img
                        src="img/segment4.svg" alt="segment"/></span> Dark theme <span
                        className="key__shortcut">Alt+T</span></a>
                      </div>
                    </div>
                    <div className="el__drop--box">
                      <p>PREVIEW</p>
                      <div className="check__drop">
                        <a href="#" className="check__active"><span className="info__icon"><img src="img/preview1.svg"
                                                                                                alt="segment"/></span> Page <span
                          className="key__shortcut">Alt+Y</span></a> <a href="#" className="check__active"><span
                        className="info__icon"><img src="img/preview2.svg" alt="segment"/></span> Thumbnails <span
                        className="key__shortcut">Alt+V</span></a> <a href="#" className="droppable__view"><img
                        src="img/rightddrop.svg" alt="rightddrop"/> Origin</a> <a href="#"
                                                                                  className="droppable__view"><img
                        src="img/rightddrop.svg" alt="rightddrop"/> Position</a> <a href="#"
                                                                                    className="droppable__view"><img
                        src="img/rightddrop.svg" alt="rightddrop"/> Orientation</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">HELP <span><svg width={8} height={5} viewBox="0 0 8 5" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4.65382L0 0.34613L8 0.34613L4 4.65382Z" fill="#9E9E9E"/></svg></span></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right__tooltip">
            <div className="right__buttons">
              <div className="short__wrapper">
                <a href="#" className="shortcut__button"><span><svg width={23} height={15} viewBox="0 0 23 15"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M22.9688 13.2656V1.73435C22.9688 1.04529 22.3734 0.482788 21.6422 0.482788H1.32656C0.595312 0.482788 0 1.04529 0 1.73435V13.2656C0 13.9547 0.595312 14.5172 1.32656 14.5172H21.6422C22.3734 14.5172 22.9688 13.9594 22.9688 13.2656ZM1.14844 13.2656V1.73435C1.14844 1.69216 1.21875 1.63123 1.32656 1.63123H21.6422C21.7547 1.63123 21.8203 1.69685 21.8203 1.73435V13.2656C21.8203 13.3078 21.75 13.3687 21.6422 13.3687H1.32656C1.21875 13.3687 1.14844 13.3078 1.14844 13.2656Z"
                          fill="#2D2D2D"/>
                        <path
                          d="M4.13906 5.17498C4.53515 5.17498 4.85625 4.85388 4.85625 4.45779C4.85625 4.0617 4.53515 3.7406 4.13906 3.7406C3.74297 3.7406 3.42188 4.0617 3.42188 4.45779C3.42188 4.85388 3.74297 5.17498 4.13906 5.17498Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/>
                        <path
                          d="M7.07812 5.17498C7.47421 5.17498 7.79531 4.85388 7.79531 4.45779C7.79531 4.0617 7.47421 3.7406 7.07812 3.7406C6.68203 3.7406 6.36093 4.0617 6.36093 4.45779C6.36093 4.85388 6.68203 5.17498 7.07812 5.17498Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/>
                        <path
                          d="M10.0125 5.17498C10.4086 5.17498 10.7297 4.85388 10.7297 4.45779C10.7297 4.0617 10.4086 3.7406 10.0125 3.7406C9.61641 3.7406 9.29532 4.0617 9.29532 4.45779C9.29532 4.85388 9.61641 5.17498 10.0125 5.17498Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/>
                        <path
                          d="M12.9516 5.17498C13.3477 5.17498 13.6688 4.85388 13.6688 4.45779C13.6688 4.0617 13.3477 3.7406 12.9516 3.7406C12.5555 3.7406 12.2344 4.0617 12.2344 4.45779C12.2344 4.85388 12.5555 5.17498 12.9516 5.17498Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/>
                        <path
                          d="M15.8906 5.17498C16.2867 5.17498 16.6078 4.85388 16.6078 4.45779C16.6078 4.0617 16.2867 3.7406 15.8906 3.7406C15.4945 3.7406 15.1734 4.0617 15.1734 4.45779C15.1734 4.85388 15.4945 5.17498 15.8906 5.17498Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/>
                        <path
                          d="M18.8297 5.17498C19.2258 5.17498 19.5469 4.85388 19.5469 4.45779C19.5469 4.0617 19.2258 3.7406 18.8297 3.7406C18.4336 3.7406 18.1125 4.0617 18.1125 4.45779C18.1125 4.85388 18.4336 5.17498 18.8297 5.17498Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/>
                        <path
                          d="M5.61092 8.21723C6.00701 8.21723 6.32811 7.89613 6.32811 7.50003C6.32811 7.10394 6.00701 6.78284 5.61092 6.78284C5.21483 6.78284 4.89374 7.10394 4.89374 7.50003C4.89374 7.89613 5.21483 8.21723 5.61092 8.21723Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/>
                        <path
                          d="M8.54531 8.21723C8.9414 8.21723 9.2625 7.89613 9.2625 7.50003C9.2625 7.10394 8.9414 6.78284 8.54531 6.78284C8.14922 6.78284 7.82812 7.10394 7.82812 7.50003C7.82812 7.89613 8.14922 8.21723 8.54531 8.21723Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/>
                        <path
                          d="M11.4844 8.21723C11.8805 8.21723 12.2016 7.89613 12.2016 7.50003C12.2016 7.10394 11.8805 6.78284 11.4844 6.78284C11.0883 6.78284 10.7672 7.10394 10.7672 7.50003C10.7672 7.89613 11.0883 8.21723 11.4844 8.21723Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/>
                        <path
                          d="M14.4188 8.21723C14.8148 8.21723 15.1359 7.89613 15.1359 7.50003C15.1359 7.10394 14.8148 6.78284 14.4188 6.78284C14.0227 6.78284 13.7016 7.10394 13.7016 7.50003C13.7016 7.89613 14.0227 8.21723 14.4188 8.21723Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/>
                        <path
                          d="M17.3578 6.78284C16.9594 6.78284 16.6406 7.10628 16.6406 7.50003C16.6406 7.89847 16.9641 8.21723 17.3578 8.21723C17.7562 8.21723 18.075 7.89379 18.075 7.50003C18.075 7.10159 17.7562 6.78284 17.3578 6.78284Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/>
                        <path
                          d="M16.6078 9.97028H6.36089C6.04214 9.97028 5.78433 10.2281 5.78433 10.5468C5.78433 10.8656 6.04214 11.1234 6.36089 11.1234H16.6078C16.9265 11.1234 17.1843 10.8656 17.1843 10.5468C17.1843 10.2281 16.9265 9.97028 16.6078 9.97028Z"
                          fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.7"/></svg></span> Shortcuts</a>
                <div className="hotkeys__wrapper">
                  <div className="hotkeys__tab">
                    <div className="elem__tab current__tab" data-tab="tab__shortcuts">
                      <a href="#">SHORTCUTS</a>
                    </div>
                    <div className="elem__tab" data-tab="legend__shortcuts">
                      <a href="#">LEGEND</a>
                    </div>
                  </div>
                  <div className="legend__shortcuts hotkeys__container" style={{display: 'none'}}>
                    <div className="elem__legend">
                      <p>Translation Status</p>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <span><img src="img/legend1.svg" alt="legend"/></span>
                        </div>
                        <p>Need attention</p>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <span><img src="img/legend2.svg" alt="legend"/></span>
                        </div>
                        <p>Draft</p>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <span><img src="img/confirmedround.svg" alt="legend"/></span>
                        </div>
                        <p>Confirmed</p>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <span><img src="img/confirmedskiped.svg" alt="legend"/></span>
                        </div>
                        <p>Confirmed skipped TM</p>
                      </div>
                    </div>
                    <div className="elem__legend">
                      <p>Segments status</p>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="legend__complete"/>
                        </div>
                        <div className="legend__double">
                          <p>Completed</p><span>Completed or pre-confirmed</span>
                        </div>
                      </div>
                    </div>
                    <div className="elem__legend">
                      <p>Suggestion type</p>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="suggestion__legend suggestion__100">
                            <span>100</span>
                          </div>
                        </div>
                        <div className="suggestion__info">
                          <p>Very good match</p><span>100%-102%</span>
                        </div>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="suggestion__legend suggestion__75">
                            <span>75</span>
                          </div>
                        </div>
                        <div className="suggestion__info">
                          <p>High fuzzy match</p><span>75%-99%</span>
                        </div>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="suggestion__legend suggestion__50">
                            <span>50</span>
                          </div>
                        </div>
                        <div className="suggestion__info">
                          <p>Low fuzzy match</p><span>50%-74%</span>
                        </div>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="suggestion__legend suggestion__translation">
                            <span>MT</span>
                          </div>
                        </div>
                        <div className="suggestion__translation">
                          <p>Machine translation</p>
                        </div>
                      </div>
                    </div>
                    <div className="elem__legend">
                      <p>Pre-translation type</p>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="pre__translate pre__100">
                            <span>100</span>
                          </div>
                        </div>
                        <div className="pretranslate__info">
                          <p>Very good match</p><span>100%-102%</span>
                        </div>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="pre__translate pre__75">
                            <span>75</span>
                          </div>
                        </div>
                        <div className="pretranslate__info">
                          <p>High fuzzy match</p><span>75%-99%</span>
                        </div>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="pre__translate pre__50">
                            <span>50</span>
                          </div>
                        </div>
                        <div className="pretranslate__info">
                          <p>Low fuzzy match</p><span>50%-74%</span>
                        </div>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="pre__translate machine__pre">
                            <span>MT</span>
                          </div>
                        </div>
                        <div className="machine__info">
                          <p>Machine translation</p>
                        </div>
                      </div>
                    </div>
                    <div className="elem__legend">
                      <p>Term type</p>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="term__type term__approved">
                            <span><img src="img/term1.svg" alt="term"/></span>
                          </div>
                        </div>
                        <div className="term__info">
                          <span className="approved__term">Approved</span>
                          <p>Correct and approved term translation</p>
                        </div>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="term__type term__not">
                            <span><img src="img/term2.svg" alt="term"/></span>
                          </div>
                        </div>
                        <div className="term__info">
                          <span className="notapproved__term">Not approved</span>
                          <p>Term translation not approved yet</p>
                        </div>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="term__type term__forbidden">
                            <span><img src="img/term3.svg" alt="term"/></span>
                          </div>
                        </div>
                        <div className="term__info">
                          <span className="forbidden__term">Forbidden</span>
                          <p>Forbidden and approved term translation</p>
                        </div>
                      </div>
                      <div className="legend__info">
                        <div className="legend__placeholder">
                          <div className="term__type forbidden__not">
                            <span><img src="img/term4.svg" alt="term"/></span>
                          </div>
                        </div>
                        <div className="term__info">
                          <span className="forbidden__term--not">Forbidden, not approved</span>
                          <p>Forbidden term translation not approved yet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner__hotkeys--wrapper tab__shortcuts hotkeys__container">
                    <div className="elem__hotkey">
                      <p>Application shortcuts</p>
                      <div className="wrapper__hotkey">
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+T</span>
                          </div>
                          <p>Switch theme</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+G</span>
                          </div>
                          <p>Search</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+B</span>
                          </div>
                          <p>Search and replace</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+H</span>
                          </div>
                          <p>Help</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+Y</span>
                          </div>
                          <p>Compact view</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+V</span>
                          </div>
                          <p>Columns</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+U</span>
                          </div>
                          <p>Font size</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+P</span>
                          </div>
                          <p>Show/hide preview</p>
                        </div>
                      </div>
                    </div>
                    <div className="elem__hotkey">
                      <p>Segments shortcuts</p>
                      <div className="wrapper__hotkey">
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Ctrl+Enter</span>
                          </div>
                          <p>Save</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+Enter</span>
                          </div>
                          <p>Save without TM</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Shift+Enter</span>
                          </div>
                          <p>Save as draft</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Ctrl+Up</span>
                          </div>
                          <p>Previous</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Ctrl+Down</span>
                          </div>
                          <p>Next</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+V</span>
                          </div>
                          <p>Columns</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+U</span>
                          </div>
                          <p>Font size</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+P</span>
                          </div>
                          <p>Show/hide preview</p>
                        </div>
                      </div>
                    </div>
                    <div className="elem__hotkey">
                      <p>EDIT shortcuts</p>
                      <div className="wrapper__hotkey">
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Ctrl+B</span>
                          </div>
                          <p>Bold text format</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Ctrl+I</span>
                          </div>
                          <p>Italic text format</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Ctrl+U</span>
                          </div>
                          <p>Underline text format</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Ctrl+A</span>
                          </div>
                          <p>Select all text</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Ctrl+Z</span>
                          </div>
                          <p>Undo edit</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Ctrl+Shift+Z</span>
                          </div>
                          <p>Redo edit</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>F8</span>
                          </div>
                          <p>Insert tag</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>F9</span>
                          </div>
                          <p>Insert all tags</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>F10</span>
                          </div>
                          <p>Copy source to target</p>
                        </div>
                      </div>
                    </div>
                    <div className="elem__hotkey">
                      <p>Tools shortcuts</p>
                      <div className="wrapper__hotkey">
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+1</span>
                          </div>
                          <p>Suggestions</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+2</span>
                          </div>
                          <p>Terms</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+3</span>
                          </div>
                          <p>History</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+4</span>
                          </div>
                          <p>Concordance</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+5</span>
                          </div>
                          <p>Symbols</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+6</span>
                          </div>
                          <p>QA</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>F8</span>
                          </div>
                          <p>Insert tag</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>F9</span>
                          </div>
                          <p>Insert all tags</p>
                        </div>
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>F10</span>
                          </div>
                          <p>Copy source to target</p>
                        </div>
                      </div>
                    </div>
                    <div className="elem__hotkey">
                      <p>Tools Items</p>
                      <div className="wrapper__hotkey">
                        <div className="hotkey__info">
                          <div className="hotkey__key">
                            <span>Alt+1</span>
                          </div>
                          <p>*1-9 suggestion, term, history or concordance item</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="preview__button"><span><svg width={19} height={11} viewBox="0 0 19 11" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.96875 0.5C6.52966 0.5 3.41091 2.2536 1.10959 5.10192C0.921803 5.33528 0.921803 5.66129 1.10959 5.89465C3.41091 8.7464 6.52966 10.5 9.96875 10.5C13.4078 10.5 16.5266 8.7464 18.8279 5.89808C19.0157 5.66472 19.0157 5.33871 18.8279 5.10535C16.5266 2.2536 13.4078 0.5 9.96875 0.5ZM10.2155 9.02093C7.93254 9.15477 6.0473 7.40117 6.1909 5.27008C6.30873 3.51304 7.83681 2.08888 9.72205 1.97907C12.005 1.84523 13.8902 3.59883 13.7466 5.72992C13.6251 7.48353 12.097 8.90769 10.2155 9.02093ZM10.1013 7.3943C8.87148 7.46637 7.85522 6.52265 7.93622 5.37646C7.99882 4.42931 8.82361 3.66404 9.83988 3.60227C11.0697 3.5302 12.086 4.47392 12.005 5.62011C11.9387 6.57069 11.1139 7.33596 10.1013 7.3943Z"
                        fill="white"/></svg></span> Preview</a>
            </div>
            <div className="head__logo">
              <a href="#"><img src="img/logoicon.svg" alt="logoicon"/></a>
            </div>
          </div>
        </div>
        <div className="tooltip__content">
          <div className="splitter_panel tool__main--">
            <div className="tooltip__preview left_panel">
              <div className="tool__inner--preview">
                <div className="progress__tooltip">
                  <div className="active__progress" style={{width: '30%'}}/>
                </div>
                <div className="tool__preview--controls">
                  <div className="controls__preview">
                    <div className="prev__first">
                      <div className="buttons__prev">
                        <a href="#" className="active__buttons" data-prev="preview__slider">
                          <svg width={18} height={10} viewBox="0 0 18 10" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9 0C5.56091 0 2.44216 1.7536 0.140841 4.60192C-0.0469469 4.83528 -0.0469469 5.16129 0.140841 5.39465C2.44216 8.2464 5.56091 10 9 10C12.4391 10 15.5578 8.2464 17.8592 5.39808C18.0469 5.16472 18.0469 4.83871 17.8592 4.60535C15.5578 1.7536 12.4391 0 9 0ZM9.2467 8.52093C6.96379 8.65477 5.07855 6.90117 5.22215 4.77008C5.33998 3.01304 6.86806 1.58888 8.7533 1.47907C11.0362 1.34523 12.9214 3.09883 12.7778 5.22992C12.6563 6.98353 11.1283 8.40769 9.2467 8.52093ZM9.13256 6.8943C7.90273 6.96637 6.88647 6.02265 6.96747 4.87646C7.03007 3.92931 7.85486 3.16404 8.87113 3.10227C10.101 3.0302 11.1172 3.97392 11.0362 5.12011C10.9699 6.07069 10.1451 6.83596 9.13256 6.8943Z"
                              fill="#0E7D7D"/>
                          </svg>
                        </a> <a href="#" className="comment__controls" data-prev="comment__preview">
                        <svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
                            fill="white"/>
                        </svg>
                        <span>22</span></a> <a href="#" data-prev="tag__preview">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.31193 15.6997C7.87938 15.701 7.46432 15.5291 7.15934 15.2224L0.778143 8.84037C0.441398 8.50459 0.268731 8.03809 0.305703 7.56397L0.712979 2.21563C0.771055 1.41117 1.41202 0.771934 2.21664 0.71604L7.56498 0.308765C7.60653 0.299805 7.64888 0.299805 7.69043 0.299805C8.12201 0.300913 8.53569 0.472472 8.84139 0.777132L15.2234 7.15833C15.5291 7.46386 15.7008 7.87833 15.7008 8.31051C15.7008 8.74269 15.5291 9.15716 15.2234 9.46269L9.4637 15.2224C9.15892 15.5289 8.74419 15.7008 8.31193 15.6997ZM7.68961 1.92891L2.33719 2.33618L1.92992 7.6886L8.31193 14.0706L14.0708 8.31173L7.68961 1.92891ZM4.85579 6.48388C4.07857 6.48404 3.40948 5.93516 3.2577 5.17291C3.10592 4.41067 3.51374 3.64735 4.23173 3.34979C4.94973 3.05224 5.77793 3.30331 6.20984 3.94947C6.64174 4.59562 6.55705 5.45689 6.00756 6.00655C5.70278 6.31308 5.28805 6.48496 4.85579 6.48388Z"
                            fill="white"/>
                        </svg>
                      </a> <a href="#" data-prev="summary__preview">
                        <svg width={13} height={16} viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12.0044 16.0003L8.89073 12.8875C7.48237 13.8165 5.5994 13.5291 4.53232 12.2223C3.46524 10.9155 3.56025 9.01322 4.75223 7.81922C5.9461 6.62686 7.84873 6.53145 9.15592 7.59838C10.4631 8.66531 10.7507 10.5484 9.8215 11.9568L12.9339 15.0709L12.0044 16.0003ZM7.07752 8.1719C6.13646 8.1713 5.32603 8.83549 5.14184 9.75829C4.95765 10.6811 5.451 11.6055 6.32019 11.9661C7.18937 12.3268 8.19232 12.0233 8.71567 11.2413C9.23902 10.4592 9.13702 9.41641 8.47205 8.75057C8.10317 8.37917 7.601 8.17079 7.07752 8.1719Z"
                            fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M12.3357 9.44755V5.39682C12.3359 5.38959 12.3354 5.38234 12.3341 5.37523C12.3317 5.36846 12.3299 5.3615 12.3287 5.35442C12.3251 5.28671 12.3124 5.2198 12.2909 5.15551L12.2839 5.13546C12.2825 5.13138 12.2811 5.12729 12.2798 5.12322C12.2752 5.1096 12.2706 5.09609 12.2647 5.08304C12.2273 4.99904 12.1751 4.92251 12.1105 4.85714L7.48462 0.231292C7.41926 0.166673 7.34272 0.114431 7.25873 0.0770975C7.24233 0.0686485 7.22532 0.0614328 7.20784 0.0555102L7.18626 0.0485714C7.12169 0.0268285 7.05456 0.0136102 6.98657 0.0092517C6.97873 0.00850207 6.97098 0.00695206 6.96344 0.00462585C6.95548 0.0019217 6.94717 0.000364146 6.93877 0H1.54195C0.690354 0 0 0.690354 0 1.54195V13.8775C0 14.7291 0.690354 15.4195 1.54195 15.4195H6.41099V13.8775H1.54195V1.54195H6.1678V5.39682C6.1678 5.82262 6.51298 6.1678 6.93877 6.1678H10.7936V9.44755H12.3357ZM7.70975 4.62585V2.63211L9.70349 4.62585H7.70975Z"
                                fill="white"/>
                        </svg>
                      </a>
                      </div>
                    </div>
                    <div className="preview__right">
                      <a href="#"><img src="img/refreshicon.svg" alt="refreshicon"/></a> <a href="#"><img
                      src="img/refreshicon2.svg" alt="refreshicon"/></a>
                      <div className="preview__more">
                        <a href="#"><img src="img/controlswhite.svg" alt="controlswhite"/></a>
                        <div className="more__dropdown">
                          <ul>
                            <li className="droppable__inner">
                              <a href="#">Preview origin <span><img src="img/rightdrop.svg" alt="dropdown"/></span></a>
                              <div className="droppable__sub">
                                <ul>
                                  <li className="check__picker active__picker">
                                    <a href="#">
                                      <p><span><img src="img/source1.svg" alt="source"/></span> Source</p>
                                      <p><input type="radio" defaultChecked id="check1" name="radio-group"/></p></a>
                                  </li>
                                  <li className="check__picker">
                                    <a href="#">
                                      <p><span><img src="img/source1.svg" alt="source"/></span> Target</p>
                                      <p><input type="radio" id="check2" name="radio-group"/></p></a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="droppable__inner">
                              <a href="#">Panel position <span><img src="img/rightdrop.svg" alt="dropdown"/></span></a>
                              <div className="droppable__sub">
                                <ul className="position__picker">
                                  <li className="check__picker active__picker">
                                    <a href="#">
                                      <p><span><img src="img/leftsource.svg" alt="source"/></span> Left</p>
                                      <p><input type="radio" defaultChecked id="check3" name="radio-gr1"
                                                defaultValue="left"/></p></a>
                                  </li>
                                  <li className="check__picker">
                                    <a href="#">
                                      <p><span><img src="img/rightsource.svg" alt="source"/></span> Right</p>
                                      <p><input type="radio" id="check4" name="radio-gr1" defaultValue="right"/></p></a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="droppable__inner">
                              <a href="#">Show <span><img src="img/rightdrop.svg" alt="dropdown"/></span></a>
                              <div className="droppable__sub">
                                <ul className="show__page">
                                  <li className="check__picker active__picker">
                                    <a href="#">
                                      <p><span><img src="img/horizontalicon.svg" alt="source"/></span> Page with
                                        horizontal thumbnails</p>
                                      <p><input type="radio" defaultChecked id="check5" name="show1"
                                                defaultValue="horizontal"/></p></a>
                                  </li>
                                  <li className="check__picker">
                                    <a href="#">
                                      <p><span><img src="img/verticalicon.svg" alt="source"/></span> Page with vertical
                                        thumbnails</p>
                                      <p><input type="radio" id="check6" name="show1" defaultValue="vertical"/></p></a>
                                  </li>
                                  <li className="check__picker">
                                    <a href="#">
                                      <p>Page only</p>
                                      <p><input type="radio" id="check7" name="show1" defaultValue="page__only"/></p>
                                    </a>
                                  </li>
                                  <li className="check__picker">
                                    <a href="#">
                                      <p>Thumbnails only</p>
                                      <p><input type="radio" id="check8" name="show1" defaultValue="thumbnail__only"/>
                                      </p></a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tag__errors tag__block" style={{display: 'none'}}>
                  <p>Tag errors</p>
                  <div className="tag__table">
                    <div className="tag__head">
                      <div className="tag__head--elem">
                        <p>Severity</p>
                      </div>
                      <div className="tag__head--elem">
                        <p>Message</p>
                      </div>
                    </div>
                    <div className="tag__content--elem">
                      <div className="content__column"><img src="img/badgeimage.svg" alt="badge"/></div>
                      <div className="content__column">
                        <p>Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)”
                          size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text
                          (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy
                          text (2)” size=”...</p>
                      </div>
                    </div>
                    <div className="tag__content--elem">
                      <div className="content__column"><img src="img/badgeimage.svg" alt="badge"/></div>
                      <div className="content__column">
                        <p>Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)”
                          size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text
                          (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy
                          text (2)” size=”...</p>
                      </div>
                    </div>
                    <div className="tag__content--elem">
                      <div className="content__column"><img src="img/badgeimage.svg" alt="badge"/></div>
                      <div className="content__column">
                        <p>Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)”
                          size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text
                          (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy
                          text (2)” size=”...</p>
                      </div>
                    </div>
                    <div className="tag__content--elem">
                      <div className="content__column"><img src="img/badgeimage.svg" alt="badge"/></div>
                      <div className="content__column">
                        <p>Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)”
                          size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text
                          (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy
                          text (2)” size=”...</p>
                      </div>
                    </div>
                    <div className="tag__content--elem">
                      <div className="content__column"><img src="img/badgeimage.svg" alt="badge"/></div>
                      <div className="content__column">
                        <p>Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)”
                          size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text
                          (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy
                          text (2)” size=”...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tag__errors summary__block" style={{display: 'none'}}>
                  <p>QA summary</p>
                  <div className="tag__table">
                    <div className="tag__head">
                      <div className="tag__head--elem">
                        <p>Severity</p>
                      </div>
                      <div className="tag__head--elem">
                        <p>Message</p>
                      </div>
                    </div>
                    <div className="tag__content--elem">
                      <div className="content__column"><img src="img/severitywanr.svg" alt="badge"/></div>
                      <div className="content__column">
                        <p>Repeated words 2Repeated words 2Repeated words 2Repeated words 2Repeated words 2Repeated
                          words 2Repeated words 2Repeated words 2Repeated words 2Repeated words 2Repeated words
                          2Repeated words 2Repeated words 2Repeated words 2Repeated words 2Repeated words 2</p>
                      </div>
                    </div>
                    <div className="tag__content--elem">
                      <div className="content__column"><img src="img/severitywanr.svg" alt="badge"/></div>
                      <div className="content__column">
                        <p>Missmatched leading white spacesMissmatched leading white spacesMissmatched leading white
                          spacesMissmatched leading white spacesMissmatched leading white spacesMissmatched leading
                          white spacesMissmatched leading white spacesMissmatched leading white spacesMissmatched
                          leading white spacesMissmatched leading white spacesMissmatched leading white
                          spacesMissmatched leading white spacesMissmatched leading white spacesMissmatched leading
                          white spacesMissmatched leading white spacesMissmatched leading white spacesMissmatched
                          leading white spaces</p>
                      </div>
                    </div>
                    <div className="tag__content--elem">
                      <div className="content__column"><img src="img/severitywanr.svg" alt="badge"/></div>
                      <div className="content__column">
                        <p>Missmatched trailing punctuationMissmatched trailing punctuationMissmatched trailing
                          punctuationMissmatched trailing punctuationMissmatched trailing punctuationMissmatched
                          trailing punctuationMissmatched trailing punctuationMissmatched trailing
                          punctuationMissmatched trailing punctuationMissmatched trailing punctuationMissmatched
                          trailing punctuationMissmatched trailing punctuationMissmatched trailing
                          punctuationMissmatched trailing punctuationMissmatched trailing punctuationMissmatched
                          trailing punctuationMissmatched trailing punctuation</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments__preview" style={{display: 'none'}}>
                  <div className="elem__comment">
                    <p>SEGMENT 6</p>
                    <div className="comment__box">
                      <div className="comment__info">
                        <a href="#" className="remove__comment"><img src="img/trash.svg" alt="trash"/></a>
                        <div className="comment__head">
                          <p>For:</p>
                          <div className="comment__tags">
                            <div className="elem__tag">
                              <p>Client</p>
                            </div>
                            <div className="elem__tag">
                              <p>Translator</p>
                            </div>
                            <div className="elem__tag">
                              <p>Project manager</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comment__users">
                        <div className="comment__user--main">
                          <h6>Justas Jasaitis</h6>
                          <p>Šis segmentas visiškai neaiškus, todėl, kad neina nieko suprasti, ko gero yra klaida
                            oriiginale, ar galite patikslinti?</p>
                        </div>
                        <div className="comment__user--main comment__user--reply editable__comment">
                          <div className="edit__comment">
                            <a href="#"><img src="img/greendots.svg" alt="greendots"/></a>
                            <div className="edit__dropdown">
                              <ul>
                                <li>
                                  <a href="#">Edit</a>
                                </li>
                                <li>
                                  <a href="#">Delete comment</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h6>Lukas baranauskas</h6>
                          <p>Patiksinimas. Patikslinimas. Patikslinimas. Patikslinimas.</p>
                        </div>
                      </div>
                      <div className="comment__reply">
                        <textarea name id cols={30} rows={10} placeholder="Reply..." defaultValue={""}/>
                        <div className="reply__controls">
                          <div className="reply__controls--wrapper">
                            <a href="#" className="cancel__reply">Cancel</a> <a href="#"
                                                                                className="reply__submit">REPLY</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elem__comment">
                    <p>SEGMENT 6</p>
                    <div className="comment__box">
                      <div className="comment__info">
                        <a href="#" className="remove__comment"><img src="img/trash.svg" alt="trash"/></a>
                        <div className="comment__head">
                          <p>For:</p>
                          <div className="comment__tags">
                            <div className="elem__tag">
                              <p>Client</p>
                            </div>
                            <div className="elem__tag">
                              <p>Translator</p>
                            </div>
                            <div className="elem__tag">
                              <p>Project manager</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comment__users">
                        <div className="comment__user--main">
                          <h6>Justas Jasaitis</h6>
                          <p>Šis segmentas visiškai neaiškus, todėl, kad neina nieko suprasti, ko gero yra klaida
                            oriiginale, ar galite patikslinti?</p>
                        </div>
                        <div className="comment__user--main comment__user--reply editable__comment">
                          <div className="edit__comment">
                            <a href="#"><img src="img/greendots.svg" alt="greendots"/></a>
                            <div className="edit__dropdown">
                              <ul>
                                <li>
                                  <a href="#">Edit</a>
                                </li>
                                <li>
                                  <a href="#">Delete comment</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h6>Lukas baranauskas</h6>
                          <p>Patiksinimas. Patikslinimas. Patikslinimas. Patikslinimas.</p>
                        </div>
                      </div>
                      <div className="comment__reply">
                        <textarea name id cols={30} rows={10} placeholder="Reply..." defaultValue={""}/>
                        <div className="reply__controls">
                          <div className="reply__controls--wrapper">
                            <a href="#" className="cancel__reply">Cancel</a> <a href="#"
                                                                                className="reply__submit">REPLY</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elem__comment">
                    <p>SEGMENT 6</p>
                    <div className="comment__box">
                      <div className="comment__info">
                        <a href="#" className="remove__comment"><img src="img/trash.svg" alt="trash"/></a>
                        <div className="comment__head">
                          <p>For:</p>
                          <div className="comment__tags">
                            <div className="elem__tag">
                              <p>Client</p>
                            </div>
                            <div className="elem__tag">
                              <p>Translator</p>
                            </div>
                            <div className="elem__tag">
                              <p>Project manager</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comment__users">
                        <div className="comment__user--main">
                          <h6>Justas Jasaitis</h6>
                          <p>Šis segmentas visiškai neaiškus, todėl, kad neina nieko suprasti, ko gero yra klaida
                            oriiginale, ar galite patikslinti?</p>
                        </div>
                        <div className="comment__user--main comment__user--reply editable__comment">
                          <div className="edit__comment">
                            <a href="#"><img src="img/greendots.svg" alt="greendots"/></a>
                            <div className="edit__dropdown">
                              <ul>
                                <li>
                                  <a href="#">Edit</a>
                                </li>
                                <li>
                                  <a href="#">Delete comment</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h6>Lukas baranauskas</h6>
                          <p>Patiksinimas. Patikslinimas. Patikslinimas. Patikslinimas.</p>
                        </div>
                      </div>
                      <div className="comment__reply">
                        <textarea name id cols={30} rows={10} placeholder="Reply..." defaultValue={""}/>
                        <div className="reply__controls">
                          <div className="reply__controls--wrapper">
                            <a href="#" className="cancel__reply">Cancel</a> <a href="#"
                                                                                className="reply__submit">REPLY</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elem__comment">
                    <p>SEGMENT 6</p>
                    <div className="comment__box">
                      <div className="comment__info">
                        <a href="#" className="remove__comment"><img src="img/trash.svg" alt="trash"/></a>
                        <div className="comment__head">
                          <p>For:</p>
                          <div className="comment__tags">
                            <div className="elem__tag">
                              <p>Client</p>
                            </div>
                            <div className="elem__tag">
                              <p>Translator</p>
                            </div>
                            <div className="elem__tag">
                              <p>Project manager</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comment__users">
                        <div className="comment__user--main">
                          <h6>Justas Jasaitis</h6>
                          <p>Šis segmentas visiškai neaiškus, todėl, kad neina nieko suprasti, ko gero yra klaida
                            oriiginale, ar galite patikslinti?</p>
                        </div>
                        <div className="comment__user--main comment__user--reply editable__comment">
                          <div className="edit__comment">
                            <a href="#"><img src="img/greendots.svg" alt="greendots"/></a>
                            <div className="edit__dropdown">
                              <ul>
                                <li>
                                  <a href="#">Edit</a>
                                </li>
                                <li>
                                  <a href="#">Delete comment</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h6>Lukas baranauskas</h6>
                          <p>Patiksinimas. Patikslinimas. Patikslinimas. Patikslinimas.</p>
                        </div>
                      </div>
                      <div className="comment__reply">
                        <textarea name id cols={30} rows={10} placeholder="Reply..." defaultValue={""}/>
                        <div className="reply__controls">
                          <div className="reply__controls--wrapper">
                            <a href="#" className="cancel__reply">Cancel</a> <a href="#"
                                                                                className="reply__submit">REPLY</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="preview__image">
                  <div className="preview__left">
                    <div className="prev__buttons">
                      <a href="#" className="start__left disabled__button"><img src="img/leftstart.svg"
                                                                                alt="leftstart"/></a> <a href="#"
                                                                                                         className="prev__button disabled__button"><img
                      src="img/previcon.svg" alt="previcon"/></a>
                    </div>
                    <div className="counter__controls">
                      <p>Page <span className="current__preview">1</span> of <span className="all__preview">100</span>
                      </p>
                    </div>
                    <div className="next__buttons">
                      <a href="#" className="next__right"><img src="img/nexticon.svg" alt="nexticon"/></a> <a href="#"
                                                                                                              className="end__next"><img
                      src="img/endnext.svg" alt="endnext"/></a>
                    </div>
                  </div>
                  <div className="preview__elem preview__empty" data-preview="preview0" style={{display: 'block'}}>
                    <div className="preview__text">
                      <p>Lorem, ipsum, dolor.</p>
                    </div>
                  </div>
                  <div className="preview__elem" data-preview="preview1"><img src="img/previewimage.png"
                                                                              alt="previewimage"/></div>
                  <div className="preview__elem" data-preview="preview2"><img src="img/previewimage.png"
                                                                              alt="previewimage"/></div>
                  <div className="preview__elem" data-preview="preview3"><img src="img/previewimage.png"
                                                                              alt="previewimage"/></div>
                  <div className="preview__elem" data-preview="preview4"><img src="img/previewimage.png"
                                                                              alt="previewimage"/></div>
                  <div className="preview__elem" data-preview="preview5"><img src="img/previewimage.png"
                                                                              alt="previewimage"/></div>
                  <div className="preview__elem" data-preview="preview6"><img src="img/previewimage.png"
                                                                              alt="previewimage"/></div>
                  <div className="preview__elem" data-preview="preview7"><img src="img/previewimage.png"
                                                                              alt="previewimage"/></div>
                </div>
                <div className="preview__slider">
                  <div className="inner__preview--slider">
                    <div className="elem__slider" data-preview="preview0">
                      <div className="slider__info">
                        <p>Some cover</p>
                      </div>
                    </div>
                    <div className="elem__slider" data-preview="preview1">
                      <div className="slider__info"><img src="img/slider1.png" alt="slider"/></div>
                    </div>
                    <div className="elem__slider" data-preview="preview2">
                      <div className="slider__info"><img src="img/slider1.png" alt="slider"/></div>
                    </div>
                    <div className="elem__slider" data-preview="preview3">
                      <div className="slider__info"><img src="img/slider1.png" alt="slider"/></div>
                    </div>
                    <div className="elem__slider" data-preview="preview4">
                      <div className="slider__info"><img src="img/slider1.png" alt="slider"/></div>
                    </div>
                    <div className="elem__slider" data-preview="preview5">
                      <div className="slider__info"><img src="img/slider1.png" alt="slider"/></div>
                    </div>
                    <div className="elem__slider" data-preview="preview6">
                      <div className="slider__info"><img src="img/slider1.png" alt="slider"/></div>
                    </div>
                    <div className="elem__slider" data-preview="preview7">
                      <div className="slider__info"><img src="img/slider1.png" alt="slider"/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tooltip__main--container right_panel">
              <div className="tooltip__main">
                <div className="progress__tooltip">
                  <div className="progress__inner">
                    <p>Translation</p>
                    <div className="progress__bar">
                      <div className="active__progress" style={{width: '20%'}}/>
                    </div>
                    <div className="progress__percent">
                      <span>65%</span>
                    </div>
                    <div className="progress__words">
                      <p>756/1365 words</p>
                    </div>
                    <div className="progress__update">
                      <a href="#"><img src="img/updateicon.svg" alt="updateicon"/></a>
                    </div>
                  </div>
                </div>
                <div className="search__table--wrapper" style={{display: 'none'}}>
                  <div className="search__head">
                    <div className="seach__elements">
                      <input type="text" placeholder/> <a href="#"><img src="img/closesearch.svg"
                                                                        alt="closesearch"/></a>
                    </div>
                    <div className="search__left">
                      <input type="text" placeholder="Search English-United Kingdom"/> <a href="#"><img
                      src="img/submitsearch.svg" alt="submitsearch"/></a>
                    </div>
                    <div className="search__right">
                      <input type="text" placeholder="Target Danish"/> <a href="#"><img src="img/submitsearch.svg"
                                                                                        alt="submitsearch"/></a>
                    </div>
                    <div className="search__filter">
                      <a href="#"><span><svg width={14} height={15} viewBox="0 0 14 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M13 0.25H1C0.58525 0.25 0.25 0.58525 0.25 1V2.9425C0.25 3.33475 0.40975 3.72025 0.68725 3.99775L4.75 8.0605V13.75C4.75 14.0103 4.885 14.251 5.10625 14.3883C5.22625 14.4625 5.36275 14.5 5.5 14.5C5.61475 14.5 5.7295 14.4738 5.83525 14.4213L8.83525 12.9213C9.0895 12.7938 9.25 12.5343 9.25 12.25V8.0605L13.3127 3.99775C13.5903 3.72025 13.75 3.33475 13.75 2.9425V1C13.75 0.58525 13.4148 0.25 13 0.25ZM7.96975 7.21975C7.82875 7.36 7.75 7.5505 7.75 7.75V11.7865L6.25 12.5365V7.75C6.25 7.5505 6.17125 7.36 6.03025 7.21975L1.75 2.9425V1.75H12.2507L12.2523 2.93725L7.96975 7.21975Z"
                                fill="#9E9E9E"/></svg></span> Filter <img src="img/filterarrow.svg" alt="filterarrow"/></a>
                      <div className="search__dropdown">
                        <ul>
                          <li>
                            <a href="#">
                              <p>All</p>
                              <p><input type="radio" id="check1" name="radio-group"/></p></a>
                          </li>
                          <li>
                            <a href="#">
                              <p>Initial</p>
                              <p><input type="radio" id="check2" name="radio-group"/></p></a>
                          </li>
                          <li>
                            <a href="#">
                              <p>Draft</p>
                              <p><input type="radio" id="check3" name="radio-group"/></p></a>
                          </li>
                          <li>
                            <a href="#">
                              <p>Confirmed</p>
                              <p><input type="radio" id="check4" name="radio-group"/></p></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="search__replace">
                      <div className="replace__tooltip" style={{display: 'none'}}>
                        <p>Show replace option</p>
                      </div>
                      <a href="#">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.6214 5.67848L14.1499 6.65408L13.2228 6.52684L13.1688 7.64317L15.449 7.95617L16.4323 5.87524L15.4678 5.31063L15.068 6.15673L14.5395 5.18113C13.1816 2.67456 10.2235 1.6393 7.94543 2.87341L8.49268 3.8836C10.2645 2.92375 12.5652 3.72893 13.6214 5.67848Z"
                            fill="#9E9E9E"/>
                          <path
                            d="M4.3741 12.3197L3.8406 11.3469L4.76836 11.4694L4.81658 10.3527L2.5348 10.0515L1.56215 12.1374L2.52958 12.6971L2.92507 11.8489L3.45857 12.8218C4.8293 15.3214 7.79264 16.3414 10.0643 15.0957L9.51193 14.0883C7.74501 15.0572 5.44022 14.2639 4.3741 12.3197Z"
                            fill="#9E9E9E"/>
                          <path
                            d="M7.26743 9.05416L6.30283 6.58007H2.60959L1.66481 9.05416H-0.00012207L3.61383 0.108459H5.33162L8.94557 9.05416H7.26743ZM5.8866 5.32475L4.98146 2.89942C4.91539 2.73692 4.82289 2.48098 4.70397 2.1316C4.58945 1.78222 4.51017 1.52628 4.46612 1.36378C4.3472 1.86347 4.17322 2.40988 3.94418 3.00301L3.07207 5.32475H5.8866Z"
                            fill="#9E9E9E"/>
                          <path
                            d="M11.1821 9.05432H13.9606C15.2495 9.05432 16.1799 9.23381 16.7519 9.59278C17.328 9.95175 17.6161 10.5188 17.6161 11.2938C17.6161 11.8159 17.4753 12.2504 17.1936 12.5971C16.9119 12.9438 16.5064 13.1621 15.9772 13.2518V13.313C16.6345 13.4313 17.1168 13.6659 17.4241 14.0167C17.7356 14.3634 17.8914 14.8346 17.8914 15.4301C17.8914 16.2337 17.5969 16.864 17.0079 17.3208C16.4232 17.7736 15.608 18 14.5624 18H11.1821V9.05432ZM12.7122 12.7501H14.1847C14.8249 12.7501 15.2922 12.6542 15.5867 12.4625C15.8812 12.2667 16.0284 11.9363 16.0284 11.4713C16.0284 11.0511 15.8684 10.7472 15.5483 10.5595C15.2324 10.3719 14.7288 10.2781 14.0374 10.2781H12.7122V12.7501ZM12.7122 13.9371V16.7701H14.3383C14.9785 16.7701 15.4608 16.6539 15.7852 16.4214C16.1138 16.1848 16.2781 15.8136 16.2781 15.3077C16.2781 14.8427 16.1117 14.498 15.7787 14.2737C15.4458 14.0493 14.9401 13.9371 14.2615 13.9371H12.7122Z"
                            fill="#9E9E9E"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="search__droppable">
                    <div className="replace__fields">
                      <div className="replace__check">
                        <ul>
                          <li><input className="styled-checkbox" id="styled-checkbox-1" type="checkbox"
                                     defaultValue="value1"/> <label htmlFor="styled-checkbox-1">Whole words</label></li>
                          <li><input className="styled-checkbox" id="styled-checkbox-2" type="checkbox"
                                     defaultValue="value1"/> <label htmlFor="styled-checkbox-2">Case sensetive</label>
                          </li>
                        </ul>
                      </div>
                      <div className="replace__form">
                        <div className="replace__field">
                          <svg width={18} height={18} viewBox="0 0 18 18" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.6214 5.67848L14.1499 6.65408L13.2228 6.52684L13.1688 7.64317L15.449 7.95617L16.4323 5.87524L15.4678 5.31063L15.068 6.15673L14.5395 5.18113C13.1816 2.67456 10.2235 1.6393 7.94543 2.87341L8.49268 3.8836C10.2645 2.92375 12.5652 3.72893 13.6214 5.67848Z"
                              fill="#9E9E9E"/>
                            <path
                              d="M4.3741 12.3197L3.8406 11.3469L4.76836 11.4694L4.81658 10.3527L2.5348 10.0515L1.56215 12.1374L2.52958 12.6971L2.92507 11.8489L3.45857 12.8218C4.8293 15.3214 7.79264 16.3414 10.0643 15.0957L9.51193 14.0883C7.74501 15.0572 5.44022 14.2639 4.3741 12.3197Z"
                              fill="#9E9E9E"/>
                            <path
                              d="M7.26743 9.05416L6.30283 6.58007H2.60959L1.66481 9.05416H-0.00012207L3.61383 0.108459H5.33162L8.94557 9.05416H7.26743ZM5.8866 5.32475L4.98146 2.89942C4.91539 2.73692 4.82289 2.48098 4.70397 2.1316C4.58945 1.78222 4.51017 1.52628 4.46612 1.36378C4.3472 1.86347 4.17322 2.40988 3.94418 3.00301L3.07207 5.32475H5.8866Z"
                              fill="#9E9E9E"/>
                            <path
                              d="M11.1821 9.05432H13.9606C15.2495 9.05432 16.1799 9.23381 16.7519 9.59278C17.328 9.95175 17.6161 10.5188 17.6161 11.2938C17.6161 11.8159 17.4753 12.2504 17.1936 12.5971C16.9119 12.9438 16.5064 13.1621 15.9772 13.2518V13.313C16.6345 13.4313 17.1168 13.6659 17.4241 14.0167C17.7356 14.3634 17.8914 14.8346 17.8914 15.4301C17.8914 16.2337 17.5969 16.864 17.0079 17.3208C16.4232 17.7736 15.608 18 14.5624 18H11.1821V9.05432ZM12.7122 12.7501H14.1847C14.8249 12.7501 15.2922 12.6542 15.5867 12.4625C15.8812 12.2667 16.0284 11.9363 16.0284 11.4713C16.0284 11.0511 15.8684 10.7472 15.5483 10.5595C15.2324 10.3719 14.7288 10.2781 14.0374 10.2781H12.7122V12.7501ZM12.7122 13.9371V16.7701H14.3383C14.9785 16.7701 15.4608 16.6539 15.7852 16.4214C16.1138 16.1848 16.2781 15.8136 16.2781 15.3077C16.2781 14.8427 16.1117 14.498 15.7787 14.2737C15.4458 14.0493 14.9401 13.9371 14.2615 13.9371H12.7122Z"
                              fill="#9E9E9E"/>
                          </svg>
                          <input type="text" placeholder="Replace"/>
                        </div>
                        <input type="submit" defaultValue="Replace" disabled/>
                      </div>
                    </div>
                  </div>
                  <div className="content__search--result">
                    <div className="elem__search--result">
                      <span>2</span>
                      <div className="search__desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                      <div className="search__desc search__picked">
                        <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</span> veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                      <div className="search__details">
                        <p><img src="img/searchresult1.svg" alt="searchresut"/></p>
                        <p><img src="img/searchresult2.svg" alt="searchresult"/></p>
                      </div>
                    </div>
                    <div className="elem__search--result">
                      <span>3</span>
                      <div className="search__desc">
                        <p>Lorem ipsum dolor sit amet,</p>
                      </div>
                      <div className="search__desc">
                        <p>Lorem ipsum dolor sit amet,</p>
                      </div>
                      <div className="search__details">
                        <p><img src="img/searchresult1.svg" alt="searchresut"/></p>
                        <p><img src="img/searchresult2.svg" alt="searchresult"/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tooltip__table--wrapper">
                  <div className="tooltip__table">
                    <table cellSpacing={0}>
                      <tbody>
                      <tr>
                        <td>
                          <div className="counter__tooltip">
                            <p>1</p>
                          </div>
                        </td>
                        <td>
                          <div className="full__translation">
                            <div className="full__top">
                              <div className="full__top-left">
                                <div className="full__left--left">
                                  <div className="lang__info">
                                    <span>English - United Kingdom</span>
                                    <div className="more__lang">
                                      <a href="#" data-more="more1" className="more__button"><img src="img/ellipses.svg"
                                                                                                  alt="ellipses"/></a>
                                      <div className="lang__list" data-more="more1">
                                        <ul>
                                          <li>
                                            <a href="#">
                                              <div className="list__image"><img src="img/spelling.svg" alt="spelling"/>
                                              </div>
                                              <div className="list__info">
                                                <p>Check spelling</p>
                                              </div>
                                              <span className="hotkeys__float">Ctrl+J</span></a>
                                          </li>
                                          <li>
                                            <a href="#" className="lang__comment">
                                              <div className="list__image"><img src="img/commentgreen.svg"
                                                                                alt="spelling"/></div>
                                              <div className="list__info">
                                                <p>Add comment</p><span>Mark text first</span>
                                              </div>
                                              <span className="hotkeys__float">Ctrl+K</span></a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="comment__lang" data-more="more1">
                                        <form action>
                                          <div className="comment__field">
                                            <input type="text" placeholder="Type comment..."/>
                                          </div>
                                          <div className="comment__list">
                                            <p>For whom comment is?</p>
                                            <div className="list__comment--inner">
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment1" type="checkbox"
                                                         defaultValue="search__input" defaultChecked/> <label
                                                  htmlFor="comment1">Justas J. <span className="comment__status">Project manager</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment2" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment2">Lukas
                                                  B. <span className="comment__status">Translator</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment3" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment3">Dalia
                                                  M.<span className="comment__status">Proofreader</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment4" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment4">Ausra
                                                  D.<span
                                                    className="comment__status">Creative proofreader</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment5" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment5">Dalia
                                                  M.<span className="comment__status">Proofreader</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment6" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment6">Ausra
                                                  D.<span
                                                    className="comment__status">Creative proofreader</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment7" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment7">Dalia
                                                  M.<span className="comment__status">Proofreader</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment8" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment8">Ausra
                                                  D.<span
                                                    className="comment__status">Creative proofreader</span></label>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="comment__controls">
                                              <input type="submit" defaultValue="Comment"/> <a href="#">Cancel</a>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="translation__text">
                                    <p contentEditable="true" onInput={textChange}>{data.text}</p>
                                  </div>
                                </div>
                                <div className="full__left--right">
                                  <div className="lang__info">
                                    <span>Danish</span>
                                    <div className="more__lang">
                                      <a href="#" data-more="more2" className="more__button"><img src="img/ellipses.svg"
                                                                                                  alt="ellipses"/></a>
                                      <div className="lang__list" data-more="more2">
                                        <ul>
                                          <li>
                                            <a href="#">
                                              <div className="list__image"><img src="img/spelling.svg" alt="spelling"/>
                                              </div>
                                              <div className="list__info">
                                                <p>Check spelling</p>
                                              </div>
                                              <span className="hotkeys__float">Ctrl+J</span></a>
                                          </li>
                                          <li>
                                            <a href="#" className="lang__comment">
                                              <div className="list__image"><img src="img/commentgreen.svg"
                                                                                alt="spelling"/></div>
                                              <div className="list__info">
                                                <p>Add comment</p><span>Mark text first</span>
                                              </div>
                                              <span className="hotkeys__float">Ctrl+K</span></a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="comment__lang" data-more="more2">
                                        <form action>
                                          <div className="comment__field">
                                            <input type="text" placeholder="Type comment..."/>
                                          </div>
                                          <div className="comment__list">
                                            <p>For whom comment is?</p>
                                            <div className="list__comment--inner">
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment11" type="checkbox"
                                                         defaultValue="search__input" defaultChecked/> <label
                                                  htmlFor="comment11">Justas J. <span className="comment__status">Project manager</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment22" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment22">Lukas
                                                  B. <span className="comment__status">Translator</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment33" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment33">Dalia
                                                  M.<span className="comment__status">Proofreader</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment44" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment44">Ausra
                                                  D.<span
                                                    className="comment__status">Creative proofreader</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment55" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment55">Dalia
                                                  M.<span className="comment__status">Proofreader</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment66" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment66">Ausra
                                                  D.<span
                                                    className="comment__status">Creative proofreader</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment77" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment77">Dalia
                                                  M.<span className="comment__status">Proofreader</span></label>
                                                </div>
                                              </div>
                                              <div className="elem__comment--lang">
                                                <div>
                                                  <input className="styled-checkbox" id="comment88" type="checkbox"
                                                         defaultValue="search__input"/> <label htmlFor="comment88">Ausra
                                                  D.<span
                                                    className="comment__status">Creative proofreader</span></label>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="comment__controls">
                                              <input type="submit" defaultValue="Comment"/> <a href="#">Cancel</a>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="translation__text">
                                    <p contentEditable="true" onInput={translateChange}>{data.translate}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="full__top--right">
                                <div className="info__top--right">
                                  <div className="column__info">
                                    <div className="status__translate">
                                      <div className="status__info" style={{display: 'none'}}>
                                        <p>Confirmed</p>
                                      </div>
                                      <img src="img/iconsave1.svg" alt="confirmedicon"/></div>
                                    <div className="double__arrow">
                                      <a href="#" className="double__bottom"><img src="img/doubleicon.svg"
                                                                                  alt="doubleicon"/></a>
                                      <div className="double__placeholder" style={{display: 'none'}}>
                                        <p>2 repetitions</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="column__info">
                                    <div className="status_col">
                                      <span><img src="img/warnicon.svg" alt="warnicon"/></span>
                                    </div>
                                    <div className="status__info status__small">
                                      <p>MT</p>
                                      <div className="status__float" style={{display: 'none'}}>
                                        <p>Machine translation</p>
                                      </div>
                                    </div>
                                    <div className="status__comment">
                                      <a href="#"><img src="img/commentnew.svg" alt="comment"/> <span>1</span></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="full__bottom">
                              <div className="translate__controls">
                                <div className="controls__left">
                                  <div className="controls__buttons--text">
                                    <div className="small__tag">
                                      <a href="#"><img src="img/button1.svg" alt="button"/></a>
                                      <div className="tag__float">
                                        <p>Bold text format <span>Ctrl+B</span></p>
                                      </div>
                                    </div>
                                    <div className="small__tag">
                                      <a href="#"><img src="img/button2.svg" alt="button"/></a>
                                      <div className="tag__float">
                                        <p>Italic text format <span>Ctrl+i</span></p>
                                      </div>
                                    </div>
                                    <div className="small__tag">
                                      <a href="#"><img src="img/button3.svg" alt="button"/></a>
                                      <div className="tag__float">
                                        <p>Underline text format <span>Ctrl+U</span></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="controls__small">
                                    <div className="small__tag">
                                      <a href="#"><img src="img/controls1.svg" alt="controls1"/></a>
                                      <div className="tag__float">
                                        <p>Remove formating <span>F7</span></p>
                                      </div>
                                    </div>
                                    <div className="small__tag">
                                      <a href="#"><img src="img/controls2.svg" alt="controls2"/></a>
                                      <div className="tag__float">
                                        <p>Insert tag <span>F8</span></p>
                                      </div>
                                    </div>
                                    <div className="small__tag">
                                      <a href="#"><img src="img/controls3.svg" alt="controls3"/></a>
                                      <div className="tag__float">
                                        <p>Copy source to target <span>F10</span></p>
                                      </div>
                                    </div>
                                    <div className="small__tag">
                                      <a href="#"><img src="img/controls4.svg" alt="controls4"/></a>
                                      <div className="tag__float">
                                        <p>Remove tags <span>F6</span></p>
                                      </div>
                                    </div>
                                    <div className="small__tag">
                                      <a href="#"><img src="img/controls5.svg" alt="controls5"/></a>
                                      <div className="tag__float">
                                        <p>Undo edit <span>Ctrl + Z</span></p>
                                      </div>
                                    </div>
                                    <div className="small__tag">
                                      <a href="#" className="disabled__button"><img src="img/controls6.svg"
                                                                                    alt="controls6"/></a>
                                      <div className="tag__float">
                                        <p>Redo edit <span>Ctrl+Shift+Z</span></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="controls__more">
                                    <a href="#" data-preview="controls1"><img src="img/controlsdots.svg"
                                                                              alt="controls"/></a>
                                  </div>
                                  <div className="controls__words">
                                    <p>69/1024</p>
                                  </div>
                                </div>
                                <div className="controls__right">
                                  <div className="controls__save">
                                    {/* <a href="#"><span><img src="img/saveicon.svg" alt="save"></span> Save <span class="droppable__controls"><img src="img/dropdownarrow.svg" alt=""></span></a> */}
                                    <div className="controls__save--button">
                                      <a href="#" onClick={saveChanges}><img src="img/saveicon.svg" alt="saveicon"/> Save</a> <a href="#"
                                                                                                           className="droppable__controls"><img
                                      src="img/dropdownarrow.svg" alt="dropdownarrow"/></a>
                                    </div>
                                    <div className="controls__drop">
                                      <ul>
                                        <li>
                                          <a href="#" data-src="img/iconsave1.svg" data-text="Saved"><span
                                            className="controls__info"><span><img src="img/iconsave1.svg"
                                                                                  alt="iconsave"/></span> Save</span>
                                            <span className="hotkey__controls">Ctrl + Enter</span></a>
                                        </li>
                                        <li>
                                          <a href="#" data-src="img/iconsave2.svg" data-text="Saved without TM"><span
                                            className="controls__info"><span><img src="img/iconsave2.svg"
                                                                                  alt="iconsave"/></span> Save without TM</span>
                                            <span className="hotkey__controls">Alt + Enter</span></a>
                                        </li>
                                        <li>
                                          <a href="#" data-src="img/iconsave3.svg" data-text="Draft"><span
                                            className="controls__info"><span><img src="img/iconsave3.svg"
                                                                                  alt="iconsave"/></span> Save as draft</span>
                                            <span className="hotkey__controls">Shift + Enter</span></a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="controls__errors">
                                    <div className="elem__error">
                                      <p><span><img src="img/warnicon.svg" alt="warnicon"/></span> 2</p>
                                    </div>
                                    <div className="elem__error">
                                      <p><span><img src="img/warnicon.svg" alt="warnicon"/></span> Missing formattings
                                      </p>
                                    </div>
                                    <div className="elem__error">
                                      <p><span><img src="img/warnicon.svg" alt="warnicon"/></span> Identical text</p>
                                    </div>
                                    <div className="elem__error">
                                      <p><span><img src="img/warnicon.svg" alt="warnicon"/></span> text info 3</p>
                                    </div>
                                    <div className="elem__error">
                                      <p><span><img src="img/warnicon.svg" alt="warnicon"/></span>text info 20</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="translate__details details__active">
                                <a href="#">Show less</a>
                              </div>
                              <div className="translate__suggestions">
                                <ul>
                                  <li>
                                    <a href="#" data-switcher="suggestions__table">SUGGESTIONS <span>2</span></a>
                                  </li>
                                  <li>
                                    <a href="#" data-switcher="term__wrapper">TERM <span>2</span></a>
                                  </li>
                                  <li>
                                    <a href="#" data-switcher="history__wrapper">HISTORY <span>2</span></a>
                                  </li>
                                  <li>
                                    <a href="#" data-switcher="concordance__wrapper">CONCORDANCE</a>
                                  </li>
                                  <li>
                                    <a href="#" data-switcher="symbols__wrapper">SYMBOLS</a>
                                  </li>
                                  <li>
                                    <a href="#" data-switcher="qa__block">QA <span>17</span></a>
                                  </li>
                                </ul>
                              </div>
                              <div className="history__wrapper" style={{display: 'none'}}>
                                <div className="elem__history">
                                  <div className="history__number">
                                    <span>1</span>
                                  </div>
                                  <div className="history__info">
                                    <div className="history__image"><img src="img/historyimage.png" alt="historyimage"/>
                                    </div>
                                    <div className="history__details">
                                      <p>Lorem ipsum dolor sit amet, consectetur <span
                                        className="history__approved">ipsum</span> <span
                                        className="history__not--approved">amet</span> sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                      <span>Nov 25. 2019, 1:29 PM posteditin LW internal</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="elem__history">
                                  <div className="history__number">
                                    <span>2</span>
                                  </div>
                                  <div className="history__info">
                                    <div className="history__image"><img src="img/historyimage.png" alt="historyimage"/>
                                    </div>
                                    <div className="history__details">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="concordance__wrapper" style={{display: 'none'}}>
                                <form action>
                                  <div className="concordance__search">
                                    <input type="text" placeholder="Source"/> <input type="submit" defaultValue/> <a
                                    href="#"><img src="img/closeicon.svg" alt="closeicon"/></a>
                                  </div>
                                  <div className="concordance__container">
                                    <div className="concordance__elem">
                                      <div className="el__half">
                                        <span>1</span>
                                        <p><span className="searched__span">Translation memory</span></p>
                                      </div>
                                      <div className="el__half">
                                        <p>Lorem ipsum dolor sit a</p>
                                      </div>
                                    </div>
                                    <div className="concordance__elem">
                                      <div className="el__half">
                                        <span>2</span>
                                        <p><span className="numb__span">1</span><span className="numb__span">2</span> A
                                          FAST <span className="searched__span">TRANSLATION</span></p>
                                      </div>
                                      <div className="el__half">
                                        <p><span className="numb__span">1</span><span
                                          className="numb__span">2</span> Lorem ipsum dolor sit a</p>
                                      </div>
                                    </div>
                                    <div className="concordance__elem">
                                      <div className="el__half">
                                        <span>1</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut
                                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                      </div>
                                      <div className="el__half">
                                        <p>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut
                                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="qa__block" style={{display: 'none'}}>
                                <div className="elem__qa">
                                  <div className="qa__info">
                                    <span><img src="img/badgeicon.svg" alt="badge"/></span>
                                    <p>Missmatched trailing punctuation</p>
                                  </div>
                                  <div className="qa__switcher">
                                    <span>Warning</span> <label className="switch"><input type="checkbox"/></label>
                                  </div>
                                </div>
                                <div className="elem__qa">
                                  <div className="qa__info">
                                    <span><img src="img/badgeicon.svg" alt="badge"/></span>
                                    <p>Missmatched trailing punctuation</p>
                                  </div>
                                  <div className="qa__switcher">
                                    <span>Warning</span> <label className="switch"><input type="checkbox"/></label>
                                  </div>
                                </div>
                                <div className="elem__qa">
                                  <div className="qa__info">
                                    <span><img src="img/badgeicon.svg" alt="badge"/></span>
                                    <p>Missmatched trailing white spaces</p>
                                  </div>
                                  <div className="qa__switcher">
                                    <span>Warning</span> <label className="switch"><input type="checkbox"/></label>
                                  </div>
                                </div>
                                <div className="elem__qa">
                                  <div className="qa__info">
                                    <span><img src="img/badgeicon.svg" alt="badge"/></span>
                                    <p>Missmatched multiple white spaces</p>
                                  </div>
                                  <div className="qa__switcher">
                                    <span>Warning</span> <label className="switch"><input type="checkbox"/></label>
                                  </div>
                                </div>
                                <div className="elem__qa">
                                  <div className="qa__info">
                                    <span><img src="img/badgeicon.svg" alt="badge"/></span>
                                    <p>Missmatched numbers</p>
                                  </div>
                                  <div className="qa__switcher">
                                    <span>Warning</span> <label className="switch"><input type="checkbox"/></label>
                                  </div>
                                </div>
                                <div className="elem__qa">
                                  <div className="qa__info">
                                    <span><img src="img/identical.svg" alt="badge"/></span>
                                    <p>Identical text</p>
                                  </div>
                                  <div className="qa__switcher">
                                    <span>Warning</span> <label className="switch"><input type="checkbox"/></label>
                                  </div>
                                </div>
                                <div className="elem__qa">
                                  <div className="qa__info">
                                    <span><img src="img/badgeicon.svg" alt="badge"/></span>
                                    <p>Repeated words</p>
                                  </div>
                                  <div className="qa__switcher">
                                    <span>Warning</span> <label className="switch"><input type="checkbox"/></label>
                                  </div>
                                </div>
                              </div>
                              <div className="suggestions__table" style={{display: 'none'}}>
                                <div className="suggestion__elem">
                                  <div className="suggestion__left">
                                    <div className="suggest__el">
                                      <span>1</span>
                                      <p>Sitecore</p>
                                    </div>
                                    <div className="suggest__el">
                                      <p>Sitecore</p>
                                    </div>
                                  </div>
                                  <div className="suggestion__right">
                                    <div className="suggestion__info">
                                      <span>MT</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="term__wrapper">
                                <div className="term__elem">
                                  <div className="term__double">
                                    <div className="el__term">
                                      <div className="term__left">
                                        <span>1</span>
                                        <p><span className="term__approved">Translation</span></p>
                                      </div>
                                      <div className="term__right">
                                        <div className="term__status">
                                          <p>Approved</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="el__term">
                                      <div className="term__left">
                                        <p><span className="term__approved">Translation</span></p>
                                      </div>
                                      <div className="term__right">
                                        <div className="term__status">
                                          <p>Approved</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="term__status">
                                    <div className="term__status--info"><img src="img/termicon.svg" alt="termicon"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="symbols__wrapper" style={{display: 'none'}}>
                                <div className="symbols__elem">
                                  <div className="symbols__head">
                                    <span>Extended Latin</span>
                                  </div>
                                  <div className="symbols__container">
                                    <div className="el__symbol">
                                      <span>Ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>ā</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="symbols__elem">
                                  <div className="symbols__head">
                                    <span>Signs</span>
                                  </div>
                                  <div className="symbols__container">
                                    <div className="el__symbol">
                                      <span>-</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>—</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>§</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>©</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>™</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>®</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>¿</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>:</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>«</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>»</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>“</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>„</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="symbols__elem">
                                  <div className="symbols__head">
                                    <span>Currencies</span>
                                  </div>
                                  <div className="symbols__container">
                                    <div className="el__symbol">
                                      <span>€</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>¢</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>₤</span>
                                    </div>
                                    <div className="el__symbol">
                                      <span>Ұ</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default App;
