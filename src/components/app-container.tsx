import { observer } from 'mobx-react'
import { useEffect } from 'react'

import Logo from '../logo.svg'
import { useStore } from '../stores'
import { TaskInput } from './task-input'
import { TaskList } from './task-list'
import { ThemeToggle } from './theme-toggle'

export const AppContainer = observer(() => {
  const store = useStore()

  useEffect(() => {
    document.body.setAttribute('data-mode', store.theme.themeMode)
  }, [store.theme.themeMode])

  return (
    <div className="max-w-screen-md mx-auto p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="logo"></img>
          <div className="text-xl text-primary">COOL TODO</div>
        </div>
        <ThemeToggle></ThemeToggle>
      </div>
      <TaskInput></TaskInput>
      <TaskList></TaskList>
    </div>
  )
})
