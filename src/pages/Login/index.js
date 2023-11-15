import { Text, View } from "react-native";
import styles from "./style";
import Input from "../../components/Input";
import SuperButton from "../../components/Button";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const myAlert = () => {
    if (!email || !senha) {
      alert("Email ou senha vazios.");
    } else {
      alert(`Email: ${email} e Senha: ${senha}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Input
        label="Email:"
        placeholder="Digite seu email"
        mask={false}
        setValor={setEmail}
      />
      <Input
        label="Senha:"
        placeholder="Digite sua senha"
        mask={true}
        setValor={setSenha}
      />
      <SuperButton fn={myAlert} textButton="Entrar" />
    </View>
  );
};

export default Login;
