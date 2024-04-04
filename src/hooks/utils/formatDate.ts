export function formatDate(date: string){
  const newDate = new Date(date);
  const dataFormatada = newDate.toLocaleString('pt-BR', {timeZone: 'UTC'}).slice(0, 10)
  return dataFormatada;
}