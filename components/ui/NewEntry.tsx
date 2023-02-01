import { useState, useContext } from 'react';
import { Button, Box, TextField, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)
  const [inputValue, setInputValue] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);

  const onChangeText = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(ev.target.value);

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);

    setInputValue('');
    setIsAddingEntry(false);
    setTouched(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            autoFocus
            multiline
            fullWidth
            label="Nueva entrada"
            helperText="Ingrese un valor"
            sx={{ margin: '10px 0' }}
            value={inputValue}
            onChange={onChangeText}
            error={inputValue.length === 0 && touched}
            onBlur={() => setTouched(true)}
          />

          <Stack justifyContent="space-between" direction="row">
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Stack>
        </>
      ) : (
        <Button
          fullWidth
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar entrada
        </Button>
      )}
    </Box>
  );
};
