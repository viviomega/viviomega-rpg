// Builtin
import { email, required, minLength, helpers } from "@vuelidate/validators";

// バリデーションメッセージ一覧
// 必須
const requiredMessage = (value) => `${value}は必須項目です`;
// メールアドレス
const emailMessage = () => `メールアドレスの形式が正しくありません`;
// 最低文字数
const minLengthMessage = (value, length) =>
  `${value}は${length}文字以上必要です`;
// 最大文字数
const maxLengthMessage = (value, length) =>
  `${value}は${length}文字以内で入力が必要です`;

// バリデーション一覧

// メールアドレス
export const validEmail = () => ({
  required: helpers.withMessage(requiredMessage("Email"), required),
  email: helpers.withMessage(emailMessage(), email),
});

// password
export const validPassword = () => ({
  required: helpers.withMessage(requiredMessage("Password"), required),
  minLengthValue: helpers.withMessage(
    minLengthMessage("Password", 8),
    minLength(8)
  ),
});

// ユーザ名
export const validUserName = () => ({
  required: helpers.withMessage(requiredMessage("UserName"), required),
});
