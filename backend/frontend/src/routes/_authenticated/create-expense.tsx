import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"

import { useForm } from '@tanstack/react-form'
import { api } from "@/lib/api"

export const Route = createFileRoute('/_authenticated/create-expense')({
  component: CreateExpense,
})

function CreateExpense() {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      title: '',
      amount: 0,
    },
    onSubmit: async ({ value }) => {
      
      await new Promise(r => setTimeout(r, 3000))
      const res = await api.expenses.$post({ json: value });
      if (!res.ok) {
        throw new Error("server error")
      }
      navigate({to: "/expenses"})
    },
  })

  return <div className="p-2 max-w-xl m-auto">
        <h2>Create Expense</h2>
        
          <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}className="max-w-xl m-auto">
            <form.Field
            name="title"
            children={(field) => (
              <>
                <Label htmlFor={field.name}>Title</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.isTouched && !field.state.meta.isValid ? (
                  <em>{field.state.meta.errors.join(', ')}</em>
                ) : null}
              </>
            )}
          />

          <form.Field
            name="amount"
            children={(field) => (
              <>
            
              <Label htmlFor={field.name}>Amount</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  type="number"
                  onChange={(e) => field.handleChange(Number(e.target.value))}
                />
                {field.state.meta.isTouched && !field.state.meta.isValid ? (
                  <em>{field.state.meta.errors.join(', ')}</em>
                ) : null}
              </>)}
              />

               <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <Button className="mt-4" type="submit" disabled={!canSubmit}>
                    {isSubmitting ? '...' : 'Submit'}
                  </Button>
                    )}
                />
        </form>
        
        
    </div>
}
