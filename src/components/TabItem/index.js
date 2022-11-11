// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActiveTabId, setActiveTab} = props
  const {tabId, displayText} = tabDetails

  const tabClassName = isActiveTabId ? 'active-tab' : 'in-active-tab'

  const onClickTab = () => {
    setActiveTab(tabId)
  }

  return (
    <li className="li">
      <button type="button" className={tabClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
