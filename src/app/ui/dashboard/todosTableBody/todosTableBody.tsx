'use client'

import { Fragment } from 'react'
import { toast } from 'react-toastify'
import { format, parseISO } from 'date-fns'

import { Todo } from '@/app/types'
import UpdateButton from '../update-button/update-button'
import DeleteButton from '../delete-button/delete-button'
import { deleteTodoServerAction } from '@/app/actions/todos/delete-todo-action'
import { updateTodoServerAction } from '@/app/actions/todos/update-todo-action'

type TodosTableProps = {
  data: Array<Todo>
}

export default function TodosTableBody({ data }: TodosTableProps) {
  const deleteTodoClientAction = async (formData: FormData) => {
    const result = await deleteTodoServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Todo deleted')
    }
  }

  const updateTodoClientAction = async (formData: FormData) => {
    const result = await updateTodoServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Todo updated')
    }
  }

  return (
    <tbody>
      {data?.map((todo) => {
        const parsedDate = parseISO(todo.createdAt!)
        const formattedDate = format(parsedDate, 'dd.MM.yyyy')

        return (
          <Fragment key={todo._id}>
            <tr className="h-[45px]">
              <td>{todo.description}</td>
              <td>{todo.done ? 'Done' : 'Open'}</td>
              <td>{formattedDate}</td>
              <td>
                <div className="gap-2 flex">
                  <UpdateButton
                    action={updateTodoClientAction}
                    id={todo._id!}
                    disabled={!!todo.done}
                  />
                  <DeleteButton
                    action={deleteTodoClientAction}
                    id={todo._id!}
                  />
                </div>
              </td>
            </tr>
          </Fragment>
        )
      })}
    </tbody>
  )
}
