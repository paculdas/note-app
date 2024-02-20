import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import colors from "../misc/Colors";
import RoundButton from "./RoundButton";

const NoteInputModal = ({ visible, onClose, onSubmit, note, isEdit }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const modalClose = () => {
    Keyboard.dismiss();
  };

  const changeText = (text, valueFor) => {
    if (valueFor === "title") setTitle(text);
    if (valueFor === "desc") setDesc(text);
  };

  const submitNote = () => {
    if (!title.trim() && !desc.trim()) return onClose();

    if (isEdit) {
      onSubmit(title, desc, Date.now());
    } else {
      onSubmit(title, desc);
      setTitle("");
      setDesc("");
    }
    onClose();
  };

  const closeNote = () => {
    if (!isEdit) {
      setTitle("");
      setDesc("");
    }
    onClose();
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [isEdit]);

  return (
    <View>
      <StatusBar hidden />
      <Modal visible={visible} animationType="fade">
        <View style={styles.container}>
          <TextInput
            value={title}
            placeholder="Title"
            style={[styles.input, styles.title]}
            onChangeText={(text) => changeText(text, "title")}
          />
          <TextInput
            multiline
            value={desc}
            placeholder="Note"
            style={[styles.input, styles.desc]}
            onChangeText={(text) => changeText(text, "desc")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundButton iconDesignName="check" onPress={submitNote} />
          {title.trim() || desc.trim() ? (
            <RoundButton iconDesignName="back" onPress={closeNote} />
          ) : null}
        </View>
        <TouchableWithoutFeedback onPress={modalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
    borderColor: colors.PRIMARY,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: colors.PRIMARY,
    fontSize: 15,
    color: colors.DARK,
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
    color: colors.PRIMARY,
  },
  desc: {
    height: 100,
    color: colors.PRIMARY,
  },
  modalBG: {
    flex: 1,
    backgroundColor: colors.LIGHT,
    zIndex: -1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
});

export default NoteInputModal;
